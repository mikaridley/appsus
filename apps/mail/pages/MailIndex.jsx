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


    if (!mails) return <div>loading...</div>
    return (
        <section className="mail-index">
            <MailList mails={mails} />
        </section>
    )
}

