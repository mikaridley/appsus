import { MailPreview } from "./MailPreview.jsx"
const { Outlet, Link } = ReactRouterDOM

export function MailList({ mails, onRemoveMail, onToggleRead }) {

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
                            />
                        </Link>
                    </li>
                )}
            </ul>
        </section>
    )
}
