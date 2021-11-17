const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')
const auth = require('../middleware/auth')


//  @router     GET api/auth
//  @desc       Get logged in user
//  @access     Private
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

// @router      POST api/auth
// @desc        Log in user
// @access      Public
router.post('/', [
    check('email', 'Please, insert a valid e-mail.').isEmail(),
    check('password', 'A password must have at least 6 characters').isLength({
        min: 6
    })
], async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty())
        res.status(400).json({ errors: errors.array() })

    const { email, password } = req.body

    try {
        const user = await User.findOne({ email })

        if(!user)
            return res.status(400).json({ msg: 'Invalid credentials.' })

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch)
            return res.status(400).json({ msg: 'Invalid credentials.' })

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 630000000
        }, (err, token) => {
            if(err) throw err

            res.json({ token })
        })
    } catch (erro) {
        console.error(erro)
        res.status(500).send({ msg: 'Server error.' })
    }
})


module.exports = router