const express = require('express');
const { route } = require('./dashbord');
const user = require('../utils/index')
const router = express.Router();
const hash = require('bcryptjs');
router.post('/login', async(req, res) => {
    try {
        // await user.userVallidation(req.body);
        const { fullname, email, password } = req.body;
        await user.create(req.body);

        const hash = await bcrypt.hash(password, 10);
        await user.create({ fullname, email, password: hash });

    } catch (err) {
        console.log(err);
    };
    res.send('success')

})
module.exports = router;