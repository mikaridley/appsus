import { MailPreview } from "./MailPreview.jsx"

const { useNavigate } = ReactRouter

export function MailList({ mails, onRemoveMail }) {
    const navigate = useNavigate()

    return (
        <section className="mail-list">
            <h1>filter</h1>
            <ul>
                {mails.map(mail =>
                    <li key={mail.id} onClick={() => navigate(`/mail/${mail.id}`)}>
                        <MailPreview mail={mail} />
                        <button onClick={() => onRemoveMail(mail.id)}>Remove</button>
                    </li>
                )}
            </ul>
        </section>
    )
}
