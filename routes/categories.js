var express = require('express');
var router = express.Router();
//requriendo controladores
const {
  list,
  store,
  detail,
  update,
  destroy
} = require("../controllers/categoriesController");

/* GET users listing. */
router.get('/list/:id', list);
router.post('/', store);
router.get("/:id", detail);
router.put("/:id", update);
router.delete("/:id", destroy);
module.exports = router;