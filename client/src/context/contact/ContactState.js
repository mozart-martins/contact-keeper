import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ContactContext from './contactContext'
import contactReducer from './contactReducer'
import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
 } from '../types'


 const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Mogohgo',
                email: 'jill@gmail.com',
                phone: '11-111-1111',
                type: 'personal'
            },
            {
                id: 2,
                name: 'Magnus Carsen',
                email: 'magnus@gmail.com',
                phone: '22-02220-12185',
                type: 'professional'
            },
            {
                id: 3,
                name: 'Paulo Copsta',
                email: 'copsta@gmail.com',
                phone: '434-4343-4254',
                type: 'personal'
            }
        ]
    }

    const [state, dispatch] = useReducer(contactReducer, initialState)

    // Add contact
    const addContact = contact => {
        contact.id = uuidv4()
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    // Delete contact

    // Set current contact

    // Clear current contact

    // Update contact

    // Filter contacts 

    // Clear filter

    return (
        <ContactContext.Provider 
            value={{ 
                contacts: state.contacts,
                addContact
            }}
        >
            {props.children}
        </ContactContext.Provider>
    )
 }

 export default ContactState