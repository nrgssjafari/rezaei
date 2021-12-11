const mongoose = require('mongoose');

const { shping } = require('./yup')
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 4,
        maxlength: 100,
    },
    body: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "عمومی",
        enum: ['خصوصی', 'عمومی']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    creatAt: {
        type: Date,
        default: Date.now
    }


});
module.exports = mongoose.model("blog", blogSchema);