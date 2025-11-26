import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"
import { MailDetails } from "../cmps/MailDetails.jsx"
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)
    const [selectedMail, setSelectedMail] = useState(null)

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query()
            .then(setMails)
            .catch(console.log)
    }

    function onRemoveMail(ev, mailId) {
        ev.stopPropagation()

        mailService.remove(mailId)
            .then(() => {
                setMails(mails =>
                    mails.filter(mail => mail.id !== mailId))
                showSuccessMsg('Deleted')
            })
            .catch(() => showErrorMsg('failed to delete'))
    }

    function onSelectMail(mailId) {
        setSelectedMail(mailId)
    }

    function getUnreadmails() {
        let count = 0
        for (let i = 0; i < mails.length; i++) {
            if (!mails[i].isRead) count++
        }
        return count
    }

    if (!mails) return <div>loading...</div>


    return (
        <section className="mail-index">
            <h2>unread mails: {getUnreadmails()}</h2>
            {!selectedMail &&
                <MailList mails={mails} onRemoveMail={onRemoveMail} onSelectMail={onSelectMail} />
            }
            {selectedMail &&
                <MailDetails mailId={selectedMail} />
            }
        </section>
    )
}

