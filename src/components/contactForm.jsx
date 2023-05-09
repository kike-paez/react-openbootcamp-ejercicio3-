import React, { useRef } from 'react';

const ContactForm = ({ onAddContact }) => {
    const name = useRef('')
    const surname = useRef('')

    function addContact(e) {
        e.preventDefault()

        const newContact = {
            name: name.current.value,
            surname: surname.current.value,
            conected: true
        }

        onAddContact(newContact)
        name.current.value = ''
        surname.current.value = ''
    }

    return (
        <div>
            <form onSubmit={addContact} className='contact-component'>
                <h2>Añadir Contacto: </h2>
                <input ref={name} name='name' placeholder='Nombre contacto' className='form-control mb-2'/>
                <input ref={surname} name='surname' placeholder='Apellido contacto' />
                <button onClick={addContact} type="submit" className='submit-button'>
                    Añadir Contacto
                </button>
            </form>
        </div>
    );
}

export default ContactForm;
