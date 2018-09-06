var express= require('express');
var router = express.Router();


router.get('/', function(req,res){ 
  

res.render('feedback',{
    title : "Feedback",
    
    id : 'feedback'
})

})



module.exports = router
