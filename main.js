const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const rout = require('./routs/dashbord');
const loginRout = require('./routs/login')
const registerRout = require('./routs/register');
const addpost = require('./routs/addpost')


// body parser
app.use(bodyparser.urlencoded({ extended: false }));
// conection
require('./utils/mongo');
// end of connection

// routs
app.use(rout);
app.use(loginRout);
app.use(registerRout);
app.use(addpost);
// end routs




const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server run on port ${port}`));