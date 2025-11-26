import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails, onRemoveMail, onSelectMail }) {

    return (
        <section className="mail-list">
            <h1>filter</h1>
            <ul>
                {mails.map(mail =>
                    <li key={mail.id} onClick={() => onSelectMail(mail.id)}>
                        <MailPreview mail={mail} />
                        <button onClick={event => onRemoveMail(event, mail.id)}>Remove</button>
                    </li>
                )}
            </ul>
        </section>
    )
}
