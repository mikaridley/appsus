import { mailService } from "../services/mail.service.js"
import { MailList } from "../cmps/MailList.jsx"

const { useState, useEffect } = React

export function MailIndex() {
    const [mails, setMails] = useState(null)

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query()
            .then(setMails)
            .catch(console.log)
    }

    function onRemoveMail(mailId) {
        mailService.remove(mailId)
            .then(() => {
                setMails(mails =>
                    mails.filter(mail => mail.id !== mailId))
            })
            .catch(console.log)
    }

    if (!mails) return <div>loading...</div>

    return (
        <section className="mail-index">
            <MailList mails={mails} onRemoveMail={onRemoveMail} />
        </section>
    )
}

