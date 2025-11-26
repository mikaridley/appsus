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

    if (!mails) return <div>loading...</div>

    return (
        <section className="mail-index">
            {!selectedMail &&
                <MailList mails={mails} onRemoveMail={onRemoveMail} onSelectMail={onSelectMail} />
            }
            {selectedMail &&
                <MailDetails mailId={selectedMail} />
            }
        </section>
    )
}

