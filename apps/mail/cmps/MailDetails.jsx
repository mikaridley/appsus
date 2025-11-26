import { mailService } from "../services/mail.service.js"

const { useState, useEffect } = React

export function MailDetails({ mailId }) {
    const [mail, setMail] = useState(null)

    useEffect(() => {
        loadMail()
    }, [])

    function loadMail() {
        mailService.get(mailId)
            .then(setMail)
            .catch(console.log)
    }

    if (!mail) return <div>loading...</div>
    const { from, subject, body, sentAt, isRead } = mail

    return (
        <section className="mail-details">
            <h1>{subject}</h1>

        </section>
    )
}