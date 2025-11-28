import { mailService } from "../services/mail.service.js"

const { useState } = React

export function AddMail({ saveMail, onCloseModal }) {
    const [mailToAdd, setMailToAdd] = useState(mailService.getEmptyMail())

    function onSaveMail(ev, mail) {
        ev.preventDefault()
        mail.sentAt = Date.now()
        saveMail(mail)
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
        setMailToAdd(prevMail => ({ ...prevMail, [field]: value }))
    }

    return (
        <form className="add-mail flex column" onSubmit={event => onSaveMail(event, mailToAdd)}>
            <section className="flex space-between">
                <p>New Message</p>
                <button type="button" onClick={() => onCloseModal(mailToAdd)}>x</button>
            </section>

            <input onChange={handleChange} name="to" id="to" placeholder="To"></input>
            <input onChange={handleChange} name="subject" id="subject" placeholder="Subject"></input>
            <label>
                <input onChange={handleChange} name="body"></input>
            </label>

            <button>Send</button>
        </form>
    )
}