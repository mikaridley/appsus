import { utilService } from "../../../services/util.service.js"

export function MailPreview({ mail }) {
    const { from, subject, body, sentAt, isRead } = mail

    const date = new Date(sentAt)
    const month = utilService.getMonthNameShort(date)
    const day = date.getDate()
    const classRead = isRead ? 'read' : ''

    return (
        <article className={`mail-preview ${classRead}`}>
            <h3>{from}</h3>
            <p><strong>{subject} </strong>- {body}</p>
            <p>{day} {month}</p>
        </article>
    )
}