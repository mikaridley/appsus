import { utilService } from "../../../services/util.service.js"

const { useState } = React
const { useNavigate } = ReactRouterDOM

export function MailPreview({ mail, onRemoveMail, onToggleRead, onToggleStar }) {
    const { from, subject, body, sentAt, isRead, isStarred } = mail

    const [isHovering, setIsHovering] = useState(false)
    const navigate = useNavigate()

    function handleMouseEnter() {
        setIsHovering(true)
    }

    function handleMouseLeave() {
        setIsHovering(false)
    }

    function navigation() {
        if (mail.sentAt) navigate(`/mail/${mail.id}`)
        else navigate(`/mail/compose/${mail.id}`)
    }

    let month = ''
    let day = ''
    if (sentAt) {
        const date = new Date(sentAt)
        month = utilService.getMonthNameShort(date)
        day = date.getDate()
    }

    const userName = utilService.getUserName(from)

    const classRead = isRead ? 'read' : ''
    const classEnvelope = isRead ? '-open' : ''
    const classStar = isStarred ? 'solid' : 'regular'

    return (
        <article className={`mail-preview ${classRead}`}
            onClick={navigation}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <i className={`fa-${classStar} fa-star`}
                onClick={event => onToggleStar(mail, event)}></i>
            <p><span>{userName}</span></p>
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