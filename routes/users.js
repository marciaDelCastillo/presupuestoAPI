var express = require('express');
var router = express.Router();
//requriendo controladores
const {
  login,
  register,
  logUser,
  addUser,
  logOut
} = require("../controllers/usersController");

/* GET users listing. */
router.get('/login', login);
router.post('/login', logUser);
router.get('/register', register);
router.post('/register', addUser);
router.get("/logout", logOut);
module.exports = router;
