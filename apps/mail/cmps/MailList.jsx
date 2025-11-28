import { MailPreview } from "./MailPreview.jsx"

export function MailList({ mails, onSetSortBy, onRemoveMail, onToggleRead, onToggleStar }) {
    return (
        <section className="mail-list">
            <select onChange={event => onSetSortBy({ sort: event.target.value })}>
                <option value="date-down">new to old</option>
                <option value="date-up">old to new</option>
                <option value="from-down">A-Z</option>
                <option value="from-up">Z-A</option>
            </select>
            <ul>
                {mails.map(mail =>
                    <li key={mail.id}>
                        <MailPreview
                            mail={mail}
                            onRemoveMail={onRemoveMail}
                            onToggleRead={onToggleRead}
                            onToggleStar={onToggleStar}
                        />
                    </li>
                )}
            </ul>
        </section >
    )
}
