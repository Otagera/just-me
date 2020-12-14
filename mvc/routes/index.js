var express = require('express');
var router = express.Router();

const indexCtrl = require("../controllers/index");

/* GET home page. */
router.get('/', indexCtrl.getHomePage);

/* GEt individual post page */
router.get('/posts/:postid', indexCtrl.getBlogPost);

/* GEt individual post page */
router.get('/about', indexCtrl.getAbout);

/* GEt individual post page */
router.get('/contact', indexCtrl.getContact);

/* GEt filtered page */
router.get('/filter', indexCtrl.getFilteredList);

/* 404 error page*/
router.get("*/404", indexCtrl.get404);

/* 404 error - page not found */
router.get("*", indexCtrl.redirect404);

module.exports = router;
