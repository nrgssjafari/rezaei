const express = require('express');
const user = require('../utils/index');
const path = require('path');
const router = express.Router();
const hash = require('bcryptjs');
router.post('/register', async(req, res) => {
    try {
        // await user.userVallidation(req.body);
        const { fullname, email, password } = req.body;
        await user.create(req.body);
        res.send('success')

        const hash = await bcrypt.hash(password, 10);
        await user.create({ fullname, email, password: hash });

    } catch (err) {
        console.log(err);
    };

    res.send('javad rezaie')
});


module.exports = router;