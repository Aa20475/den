var express = require('express');
var router = express.Router();
const jsftp = require("jsftp");
 
const Ftp = new jsftp({
    host:"localhost"
});

/* GET home page. */
router.get('/', function (req, res, next) {
    Ftp.list('./',(err,data)=>{
        console.log(data);
        
        res.render('warehouse', { title: 'Warehouse',data: data});
    })
});

module.exports = router;
