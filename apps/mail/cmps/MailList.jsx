import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails }) {
    return (
        <section className="mail-list">
            <h1>filter</h1>
            <ul>
                {mails.map(mail =>
                    <li key={mail.id}>
                        <MailPreview mail={mail} />
                    </li>
                )}
            </ul>
        </section>
    )
}
