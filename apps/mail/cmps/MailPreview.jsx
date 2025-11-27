import { utilService } from "../../../services/util.service.js"

const { useState } = React

export function MailPreview({ mail, onRemoveMail, onToggleRead, onToggleStar }) {
    const { from, subject, body, sentAt, isRead, isStarred } = mail
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
    const classEnvelope = isRead ? '-open' : ''
    const classStar = isStarred ? 'solid' : 'regular'

    return (
        <article className={`mail-preview ${classRead}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <i className={`fa-${classStar} fa-star`}
                onClick={event => onToggleStar(mail, event)}></i>
            <h3>{userName}</h3>
            <p className="content">{subject} - {body}</p>
            {!isHovering && <p>{day} {month}</p>}

            {isHovering &&
                <section className="flex">
                    <i className="fa-regular fa-trash-can"
                        onClick={event => onRemoveMail(event, mail)}></i>

                    <i className={`fa-regular fa-envelope${classEnvelope}`}
                        onClick={event => onToggleRead(mail, event)}></i>
                </section>
            }
        </article>
    )
}