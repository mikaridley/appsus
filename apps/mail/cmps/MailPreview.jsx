import { utilService } from "../../../services/util.service.js"
import { LongTxt } from "../../../cmps/LongTxt.jsx"

const { useState } = React

export function MailPreview({ mail, onRemoveMail, onToggleRead }) {
    const { from, subject, body, sentAt, isRead } = mail
    const [isHovering, setIsHovering] = useState(false)

    function handleMouseEnter() {
        setIsHovering(true)
    }

    function handleMouseLeave() {
        setIsHovering(false)
    }

    const userName = utilService.getUserName(from)

    const date = new Date(sentAt)
    const month = utilService.getMonthNameShort(date)
    const day = date.getDate()

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
                    <button onClick={event => onToggleRead(event, mail)}>mark read</button>
                </section>
            }
        </article>
    )
}