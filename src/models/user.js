const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

module.exports = User