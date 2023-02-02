const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home Page' });
});

router.get('/add', (req, res) => {
  res.render('add_users', { title: 'Add Users' });
});

router.post('/add', (req, res) => {
  res.send('sagar');
});
module.exports = router;
