//imports
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 4000; //connect to port

//Database Connection
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => {
  console.log('Connected To Database Succesfully');
});

//middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//session
app.use(
  session({
    secret: 'My Secret Key',
    saveUninitialized: true,
    resave: false,
  })
);

app.use((req, res, next) => {
  // res.local.message = req.session.message;
  // delete req.session.message;
  next();
});

//set template engine
app.set('view engine', 'ejs');

//route prefix
app.use('', require('./routes/routes'));

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
