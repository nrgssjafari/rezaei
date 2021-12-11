const express = require('express');

const router = express.Router();
const blog = require('../utils/blog')
router.post('/addpost', function(req, res, next) {

    res.send("hiiiiiiii king")
});


exports.createPost = async(req, res) => {
    try {
        await blog.create({...req.body, user: req.user.id })
    } catch (err) {
        console.log(err);
    }
}

module.exports = router;

exports.editpost = async(req, res) => {
    const post = await blog.findOne({
        _id: req.params.id,
    });
    if (!post) {
        res.send('error')
    }
    if (post.user.toString() == req.user.id) {
        res.send('editpost')
    }
}