import React, { useState, useContext, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'
import { UPDATE_CONTACT } from '../../context/types'


const ContactForm = () => {
    const contactContext = useContext(ContactContext)

    const { current, addContact, clearCurrent, updateContact } = contactContext

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    })

    useEffect(() => {
        if(current !== null) {
            setContact(current)
        } else {
            setContact({
                name: '',
                email: '',
                phone: '',
                type: 'personal'
            })
        }
    }, [contactContext, current])


    const { name, email, phone, type } = contact

    const onChange = e => setContact({
        ...contact,
        [e.target.name]: e.target.value
    })

    const onSubmit = e => {
        e.preventDefault()
        if(current) {
            updateContact(contact)
        } else {
            addContact(contact)
        }
        setContact({
            name: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }

    const clearAll = () => {
        clearCurrent()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">
                { current ? 'Edit Contact' : 'Add Contact' }
            </h2>
            <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                value={name} 
                onChange={onChange} 
            />
            <input 
                type="text" 
                name="email" 
                placeholder="E-mail" 
                value={email} 
                onChange={onChange} 
            />
            <input 
                type="text" 
                name="phone" 
                placeholder="Phone Number" 
                value={phone} 
                onChange={onChange} 
            />
            <h5>Contact Type</h5>
            <input 
                type="radio" 
                name="type" 
                value="personal"
                checked={ type === 'personal' }
                onChange={onChange}
            /> Personal{' '}
            <input 
                type="radio" 
                name="type" 
                value="professional"
                checked={ type === 'professional' } 
                onChange={onChange}
            /> Professional{' '}
            <div>
                <input type="submit" value={ current ? 'Edit Contact' : 'Add Contact' } className="btn btn-primary btn-block" />
                {current && <div>
                    <button className="btn btn-light btn-block" onClick={clearAll}>
                        Clear
                    </button>
                </div>}
            </div>
        </form>
    )
}

export default ContactForm