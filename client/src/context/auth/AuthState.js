import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './authContext'
import authReducer from './authReducer'
import setAuthToken from '../../utils/setAuthToken'
import { 
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
 } from '../types'


 const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    // Load User
    const loadUser = async () => {
<<<<<<< HEAD
        if(localStorage.token)
            setAuthToken(localStorage.token)

=======
>>>>>>> c8fa8461eee0288d0600684d5ba85800574f0871
        try {
            const res = await axios.get('/api/auth')

            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: AUTH_ERROR
            })
        }
    }

    // Register User
    const register = async formData => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try {
            // Por causa da configuração 'proxy' não é preciso colocar a URL inteira
            const res = await axios.post('api/users', formData, config)

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    // Login User
    const loginUser = () => console.log('loginUser')

    // Logout
    const logoutUser = () => console.log('logoutUser')

    // Clear Errors
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS })


    return (
        <AuthContext.Provider 
            value={{ 
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                loadUser,
                register,
                loginUser,
                logoutUser,
                clearErrors
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
 }

 export default AuthState