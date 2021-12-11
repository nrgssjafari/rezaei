const passport = require('passport');
const { Strategy } = require('passport-local');
const bcrypt = require('bcryptjs');
const user = require('../utils/index');

passport.use(new Strategy({ usernameField: "email" }, async(email, passwprd, done) => {
    try {
        const user = await user.findOne({ email });
        if (!user) {
            return done(null, false, { message: "کاربری با این ایمیل ثبت نشده" })
        }
        const ismatch = await bcrypt.compare(password, user.password)
        if (ismatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: "رمز وازد شده نامعتبر است" })
        }
    } catch (err) {
        console.log(err)
    }

}))
passport.serializeUser((user, done) => {
    done(null, user);
})
passport.deserializeUser((id, done) => {
    user.findById(id, (err, user) => {
        done(err, user)
    })
})