import { mailService } from "../services/mail.service.js"
import { Loader } from "../../../cmps/Loader.jsx"

const { useState, useEffect } = React
const { useParams, Link } = ReactRouterDOM

export function MailDetails() {
    const [mail, setMail] = useState(null)
    const { mailId } = useParams()

    useEffect(() => {
        loadMail()
    }, [])

    function loadMail() {
        mailService.get(mailId)
            .then(setMail)
            .catch(console.log)
    }

    if (!mail) return <Loader />

    if (!mail.isRead) {
        mail.isRead = true
        mailService.save(mail)
    }

    const { from, subject, body, sentAt } = mail
    return (
        <section className="mail-details">
            <h1>{subject}</h1>
            <h3>{from}</h3>
            <p>{body}</p>
            <button><Link to="/mail">Back</Link></button>
        </section>
    )
}