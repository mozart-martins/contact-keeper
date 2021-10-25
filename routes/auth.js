const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')


//  @router     GET api/auth
//  @desc       Get logged in user
//  @acess      Private
router.get('/', (req, res) => {
    res.send('Get a logged user...')
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
    const erros = validationResult(req)

    if(!erros.isEmpty())
        res.status(400).json({ errors: erros.array() })

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