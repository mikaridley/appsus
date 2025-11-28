import { mailService } from "../services/mail.service.js"
const { useState } = React
const { Link } = ReactRouterDOM

export function SideNav({ onSetFilterBy }) {
    const [unreadCount, setUnreadCount] = useState()
    mailService.getUnreadMails().then(setUnreadCount)

    return (
        <nav className="side-nav">
            <Link to="/mail/compose">
                <button>Compose</button>
            </Link>
            <p onClick={() => onSetFilterBy({ nav: 'inbox' })}>Inbox {unreadCount}</p>
            <p onClick={() => onSetFilterBy({ nav: 'starred' })}>Starred</p>
            <p onClick={() => onSetFilterBy({ nav: 'sent' })}>Sent</p>
            <p onClick={() => onSetFilterBy({ nav: 'draft' })}>Drafts</p>
            <p onClick={() => onSetFilterBy({ nav: 'trash' })}>Trash</p>
        </nav>
    )
}