const mongoose = require('mongoose')

const { schema } = require('./yup')
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255,
    },
    creatAt: {
        type: Date,
        default: Date.now
    }
});

// userSchema.statics.userVallidation = function(body) {
//     return schema.validate(body, { abortEarly: false });
// }

const User = mongoose.model("User", userSchema);
module.exports = User;