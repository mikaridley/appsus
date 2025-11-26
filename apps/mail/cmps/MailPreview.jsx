export function MailPreview({ mail }) {
    const { from, subject, body, sentAt } = mail
    return (
        <article>
            <h1>{from}</h1>
            <h2>{subject} - {body}</h2>
            <p>{sentAt}</p>
        </article>
    )
}