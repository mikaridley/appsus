import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { AddMail } from "../cmps/AddMail.jsx"
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"
import { Loader } from '../../../cmps/Loader.jsx'

const { useState, useEffect } = React
const { Outlet, useParams } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [showAddModal, setShowAddModal] = useState(false)
    const [filterBy, setFilterBy] = useState('inbox')

    const { mailId } = useParams()

    useEffect(() => {
        loadMails()
    }, [filterBy])

    function loadMails() {
        mailService.query(filterBy)
            .then(setMails)
            .catch(console.log)
    }

    function saveMail(mail) {
        mailService.save(mail)
            .then(() => {
                toggleShowAddModal()
                loadMails()
                showSuccessMsg('Sent')
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Failed to send Mail')
            })
    }

    function onRemoveMail(ev, mail) {
        ev.preventDefault()

        const mailId = mail.id
        const newMails = mail.removedAt ? mailService.remove(mailId) : mailService.save(mail)
        mail.removedAt = Date.now()

        newMails.then(() => {
            setMails(mails =>
                mails.filter(mail => mail.id !== mailId))
            showSuccessMsg('Deleted')
        })
            .catch(() => showErrorMsg('failed to delete'))
    }

    function toggleShowAddModal() {
        setShowAddModal(showAddModal => !showAddModal)
    }

    function onToggleRead(ev, mail) {
        ev.preventDefault()

        mail.isRead = !mail.isRead
        mailService.save(mail)
    }

    function getUnreadmails() {
        let count = 0
        for (let i = 0; i < mails.length; i++) {
            if (!mails[i].isRead) count++
        }
        return count
    }

    if (!mails) return <Loader />

    return (
        <section className="mail-index flex space-between">
            <nav>
                <button onClick={toggleShowAddModal}>Compose</button>
                <p onClick={() => setFilterBy('inbox')}>Inbox {getUnreadmails()}</p>
                <p onClick={() => setFilterBy('sent')}>Sent</p>
                <p onClick={() => setFilterBy('trash')}>Trash</p>
            </nav>
            <main>
                {!mailId &&
                    <MailList mails={mails}
                        onRemoveMail={onRemoveMail}
                        onToggleRead={onToggleRead}
                    />}
                <Outlet />
                {showAddModal && <AddMail saveMail={saveMail} toggleModal={toggleShowAddModal} />}
            </main>
        </section>
    )
}

