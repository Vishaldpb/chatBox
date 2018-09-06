var express= require('express');
var router = express.Router();
var dataFile = require('../data/data.json')

router.get('/', function(req, res){

    var data = req.app.get('appData')
    var pageFriends = data.friends;

    res.render('friends',{
        title : "Friends",
        friends : pageFriends,
        id : 'friends'
       

    })
})

router.get('/:friendid', function(req, res){
    
    var data = req.app.get('appData')
    var pageFriends = data.friends;

    var ss =[];
    

    pageFriends.forEach((fd)=>{

        if(fd.shortname == req.params.friendid){
            ss.push(fd);

            res.render('friends',{
                title : "Friend Detail",
                friends : ss,
                id : 'friendDetail'
            })
    
        }
    

    })


   

   

     
})

module.exports = router
