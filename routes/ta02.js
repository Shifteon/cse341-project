//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = [];
var message = "";

router.post('/addUser', (req, res, next) => {
  
  users.push({ name: req.body.name });
  if (message != "") {
    message = "";
  }
  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  let found = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name == req.body.name) {
      users.splice(i, 1);
      found = true;
      if (message != "") {
        message = "";
      }
    }
  }
  if (!found) {
    message = "The user doesn't exist!";
  }
  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    users: users,
    message: message
  });
});

module.exports = router;
