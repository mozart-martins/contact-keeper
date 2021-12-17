import React, { useContext, Fragment, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/auth/authContext'
import ContactContext from '../../context/contact/contactContext'

const Navbar = ({ title, icon }) => {

    const authContext = useContext(AuthContext)
    const contactContext = useContext(ContactContext)


    const { isAuthenticated, logoutUser, user } = authContext
    const { clearContacts } = contactContext

    const logount = () => {
        logoutUser();
        clearContacts();
    }

    const authLinks = (
        <Fragment>
            <li>Hello { user && user.name }</li>
            <li>
                <a onClick={logount} href="#!">Logout</a>
            </li>
        </Fragment>
    )


    const guessLinks = (
        <Fragment>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </Fragment>
    )


    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}/>
                {title}
            </h1>
            <ul>
                { isAuthenticated ? authLinks : guessLinks }
            </ul>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: "Contact Keeper",
    icon: "fas fa-id-card-alt"
}

export default Navbar