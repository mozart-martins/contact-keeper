const mongoose = require('mongoose')

const ContactSchemma = mongoose.Schemma({
    user: {
        type: mongoose.Schemma.types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exporst = mongoose.model('contact', ContactSchemma)