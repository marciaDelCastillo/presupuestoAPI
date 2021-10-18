var express = require('express');
var router = express.Router();
//requriendo controladores
const {
  logUser,
  addUser,
  logOut
} = require("../controllers/usersController");

/* GET users listing. */
router.post('/login', logUser);
router.post('/register', addUser);
router.get("/logout", logOut);
module.exports = router;
