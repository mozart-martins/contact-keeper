const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const Contact = require('../models/Contact')
const auth = require('../middleware/auth')


//  @router     GET api/contacts
//  @desc       Get logged in user
//  @acess      Private
router.get('/', auth, async (req, res) => {
    try {

        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 })

        res.json(contacts)

    } catch (error) {
        
        console.error(error.message)

        res.status(500).send('Server Error')

    }
})


//  @router     POST api/contacts
//  @desc       Add new concact
//  @acess      Private
router.post('/', (req, res) => {
    res.send('Add contact...')
})


//  @router     PUT api/contacts/:id
//  @desc       Updating a contact
//  @acess      Private 
router.put('/:id', (req, res) => {
    res.send('Update contact...')
})


//  @router     DELETE api/contacts/:id
//  @desc       Delete a contact
//  @acess      Private 
router.delete('/:id', (req, res) => {
    res.send('Delete contact...')
})

module.exports = router








