import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails, onSelectMail, onPutMailToJunk }) {

    return (
        <section className="mail-list">
            <h1>filter</h1>
            <ul>
                {mails.map(mail =>
                    <li key={mail.id} onClick={() => onSelectMail(mail.id)}>
                        <MailPreview mail={mail} onPutMailToJunk={onPutMailToJunk} />
                    </li>
                )}
            </ul>
        </section>
    )
}
