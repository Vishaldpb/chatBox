var express= require('express');
var router = express.Router();
var feedback = require('../data/feedback')
var fs = require('fs')

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.get('/', function(req,res){ 
    res.json(feedback);
})

router.post('/', function(req, res){

    feedback.unshift(req.body);
    fs.writeFile('data/feedback.json',JSON.stringify(feedback),'utf8',function(err){
        console.log(err)
    })
    res.json(feedback);
})

router.delete('/:id', function(req, res){

    feedback.splice(req.params.id,1);
    fs.writeFile('data/feedback.json',JSON.stringify(feedback),'utf8',function(err){
        console.log(err)
    })
    res.json(feedback);
})

module.exports = router
