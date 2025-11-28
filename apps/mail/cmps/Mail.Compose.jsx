import { mailService } from "../services/mail.service.js"
import { utilService } from "../../../services/util.service.js"
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"

const { useState, useEffect } = React
const { useNavigate, useParams, useSearchParams, useOutletContext } = ReactRouterDOM

export function MailCompose() {
    const [mail, setMail] = useState(mailService.getEmptyMail())
    const [searchParams, setSearchParams] = useSearchParams()
    const [isLoading, setIsLoading] = useState(false)
    const { mailId } = useParams()
    const navigate = useNavigate()

    const { sendMailToNote } = useOutletContext()

    useEffect(() => {
        setSearchParams(utilService.getValidValues({ subject, body }))
    }, [mail])

    useEffect(() => {
        if (mailId) loadMail()
        if (searchParams.get('subject')) {
            mail.subject = searchParams.get('subject')
            setMail(mail)
        }
        if (searchParams.get('body')) {
            mail.body = searchParams.get('body')
            setMail(mail)
        }

    }, [])

    function loadMail() {
        setIsLoading(true)
        mailService.get(mailId)
            .then(setMail)
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Failed to load mail')
            })
            .finally(() => {
                console.log('hi')
                setIsLoading(false)
            }
            )
    }

    function onSaveMail(ev, mail) {
        ev.preventDefault()
        mail.sentAt = Date.now()

        mailService.save(mail)
            .then(() => {
                onCloseModal(mail)
                showSuccessMsg('Sent')
            })
            .catch(err => {
                console.log('err:', err)
                showErrorMsg('Failed to send Mail')
            })
    }

    function onCloseModal(mail) {
        navigate("/mail")

        if (!mail.sentAt) {
            mailService.save(mail)
                .then(() => showSuccessMsg('Added to drafts'))
        }
    }

    function handleChange({ target }) {
        const field = target.name
        let value = target.value
        switch (target.type) {
            case 'number':
            case 'range':
                value = +value
                break;

            case 'checkbox':
                value = target.checked
                break
        }
        setMail(prevMail => ({ ...prevMail, [field]: value }))
    }

    function mailToNote() {
        const subject = searchParams.get('subject')
        const body = searchParams.get('body')

        navigate(`/note?title=${subject}&txt=${body}`)
    }

    let { to, subject, body } = mail

    const loadingClass = isLoading ? 'loading' : ''

    return (
        <form className={`mail-compose flex column ${loadingClass}`}
            onSubmit={event => onSaveMail(event, mail)}>

            <section className="flex space-between">
                <p>New Message</p>
                <button type="button" onClick={() => onCloseModal(mail)}>x</button>
                <button onClick={mailToNote}>Make note</button>
            </section>

            <input onChange={handleChange} name="to" id="to"
                value={to} placeholder="To"></input>

            <input onChange={handleChange} name="subject" id="subject"
                value={subject} placeholder="Subject"></input>

            <label>
                <input onChange={handleChange} name="body" value={body}></input>
            </label>

            <button>Send</button>
        </form>
    )
}