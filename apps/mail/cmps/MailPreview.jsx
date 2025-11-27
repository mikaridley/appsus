import { utilService } from "../../../services/util.service.js"
import { LongTxt } from "../../../cmps/LongTxt.jsx"

const { useState } = React

export function MailPreview({ mail, onRemoveMail, onToggleRead }) {
    const { from, subject, body, sentAt, isRead } = mail
    const [isHovering, setIsHovering] = useState(false)

    let month
    let day

    function handleMouseEnter() {
        setIsHovering(true)
    }

    function handleMouseLeave() {
        setIsHovering(false)
    }

    const userName = utilService.getUserName(from)

    if (sentAt) {
        const date = new Date(sentAt)
        month = utilService.getMonthNameShort(date)
        day = date.getDate()
    }

    const classRead = isRead ? 'read' : ''

    return (
        <article className={`mail-preview ${classRead}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <h3>{userName}</h3>
            <LongTxt txt={`${subject} - ${body}`} length={140} />
            {!isHovering && <p>{day} {month}</p>}
            {isHovering &&
                <section>
                    <button onClick={event => onRemoveMail(event, mail)}>remove</button>
                    <button onClick={event => onToggleRead(mail, event)}>mark read</button>
                </section>
            }
        </article>
    )
}