//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = [];

router.post('/addUser', (req, res, next) => {
  users.push({ name: req.body.name });
  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  console.log(users.size);
  for (let i = 0; i < users.size; i++) {
    console.log(users[i].name);
    if (users[i].name == req.body.name) {
      users.splice(i);
    }
  }
  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users
  });
});

module.exports = router;
