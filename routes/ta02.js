//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = [];

const params = {
title: 'Team Activity 02',
path: '/ta02', // For pug, EJS
activeTA03: true, // For HBS
contentCSS: true, // For HBS
users: users,
message: "",
exists: false
};

router.post('/addUser', (req, res, next) => {
  let exists = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name == req.body.name) {
      exists = true;
      params.exists = true;
    }
  }
  if (!exists)
    users.push({ name: req.body.name });
  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  let found = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].name == req.body.name) {
      users.splice(i, 1);
      found = true;
    }
  }
  if (!found) {
    params.message = "The user doesn't exist!";
  }
  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', params);
  params.exists = false;
  params.message = "";
});

module.exports = router;
