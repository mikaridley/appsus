const { useState } = React

export function MailFilter({ filterBy, onSetFilterBy }) {
    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

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
        setFilterByToEdit(prevFilter => ({ ...prevFilter, [field]: value }))
        onSetFilterBy(filterByToEdit)
    }

    return (
        <input className="mail-filter"
            onChange={handleChange}
            type="text" name='txt'
            placeholder="Serch mail"
        />
    )
}