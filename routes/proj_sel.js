/**
 * Created by wjs99 on 2017-05-08.
 */

var express = require("express");
var router = express.Router();

router.get('/',function (req,res) {
    res.render('proj_menu');
});
module.exports = router;