var express = require('express');
var router = express.Router();
//requriendo controladores
const {
  list,
  store,
  filterByType,
  filterByCategory,
  detail,
  update,
  destroy
} = require("../controllers/operationsController");

/* GET users listing. */
router.get('/', list);
router.post('/', store);
router.get('/type/:id', filterByType);
router.get('/category/:id', filterByCategory);
router.get("/:id", detail);
router.put("/:id", update);
router.delete("/:id", destroy);
module.exports = router;