import { MailPreview } from "./MailPreview.jsx"
const { Link } = ReactRouterDOM

export function MailList({ mails, onRemoveMail, onToggleRead, onToggleStar }) {

    return (
        <section className="mail-list">
            <h1>filter</h1>
            <ul>
                {mails.map(mail =>
                    <li key={mail.id}>
                        <Link to={`/mail/${mail.id}`}>
                            <MailPreview mail={mail}
                                onRemoveMail={onRemoveMail}
                                onToggleRead={onToggleRead}
                                onToggleStar={onToggleStar}
                            />
                        </Link>
                    </li>
                )}
            </ul>
        </section>
    )
}
