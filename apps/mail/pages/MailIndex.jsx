import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { AddMail } from "../cmps/AddMail.jsx"
import { MailFilter } from "../cmps/MailFilter.jsx"
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"
import { Loader } from '../../../cmps/Loader.jsx'

const { useState, useEffect } = React
const { Outlet, useParams } = ReactRouterDOM

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [showAddModal, setShowAddModal] = useState(false)
    const [unreadCount, setUnreadCount] = useState()
    const [filterBy, setFilterBy] = useState({ nav: 'inbox' })

    const { mailId } = useParams()

    useEffect(() => {
        loadMails()
    }, [filterBy])

    mailService.getUnreadMails().then(setUnreadCount)

    function loadMails() {
        mailService.query(filterBy)
            .then(setMails)
            .catch(console.log)
    }

    function saveMail(mail) {
        mailService.save(mail)
            .then(() => {
                onCloseModal(mail)
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

    function openAddModal() {
        setShowAddModal(true)
    }

    function onCloseModal(mail) {
        setShowAddModal(false)
        if (!mail.sentAt) {
            mailService.save(mail)
                .then(() => showSuccessMsg('Added to drafts'))
        }
    }

    function onToggleRead(mail, ev = null) {
        if (ev) ev.preventDefault()

        mail.isRead = !mail.isRead
        mailService.save(mail)
            .then(savedMail => {
                setMails(mails.map(mail => mail.id === saveMail.id ? savedMail : mail))
            })
    }

    function onSetFilterBy(filterByToEdit) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...filterByToEdit }))
    }

    if (!mails) return <Loader />

    return (
        <section className="mail-index flex space-between">
            <MailFilter onSetFilterBy={onSetFilterBy} />
            <nav>
                <button onClick={openAddModal}>Compose</button>
                <p onClick={() => setFilterBy({ nav: 'inbox' })}>Inbox {unreadCount}</p>
                <p onClick={() => setFilterBy({ nav: 'sent' })}>Sent</p>
                <p onClick={() => setFilterBy({ nav: 'trash' })}>Trash</p>
                <p onClick={() => setFilterBy({ nav: 'draft' })}>Drafts</p>
            </nav>
            <main>
                {!mailId &&
                    <MailList mails={mails}
                        onRemoveMail={onRemoveMail}
                        onToggleRead={onToggleRead}
                    />}
                <Outlet context={onToggleRead} />
                {showAddModal && <AddMail saveMail={saveMail} onCloseModal={onCloseModal} />}
            </main>
        </section>
    )
}

