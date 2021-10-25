const express = require('express')
const router = express.Router()


//  @router     GET api/contacts
//  @desc       Get logged in user
//  @acess      Private
router.get('/', (req, res) => {
    res.send('Get all contacts...')
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








