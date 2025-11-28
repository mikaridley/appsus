import { mailService } from "../services/mail.service.js"
const { useState } = React
const { Link } = ReactRouterDOM

export function SideNav({  setFilterBy }) {
    const [unreadCount, setUnreadCount] = useState()
    mailService.getUnreadMails().then(setUnreadCount)

    return (
        <nav className="side-nav">
            <Link to="/mail/compose">
                <button>Compose</button>
            </Link>
            <p onClick={() => setFilterBy({ nav: 'inbox' })}>Inbox {unreadCount}</p>
            <p onClick={() => setFilterBy({ nav: 'starred' })}>Starred</p>
            <p onClick={() => setFilterBy({ nav: 'sent' })}>Sent</p>
            <p onClick={() => setFilterBy({ nav: 'draft' })}>Drafts</p>
            <p onClick={() => setFilterBy({ nav: 'trash' })}>Trash</p>
        </nav>
    )
}