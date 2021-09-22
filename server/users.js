
  module.exports = function(req,res){

    var falseObj =
    {
        username:"",
        password:"",
        valid:false
    };
    var user1 = {
        username:"user1",
        password:"123",
        valid:true
    };
    var user2 = {
        username:"user2",
        password:"1234",
        valid:true
    };
    var user3 = {
        username:"user3",
        password:"12345",
        valid:true
    };
    if (!req.body) {
        return res.sendStatus(400)
    }
    console.log(req.body.userName);
    if (req.body.userName == user1.username && req.body.pass == user1.password)
        {
                res.send(user1);
        }
    else if (req.body.userName == user2.username && req.body.pass == user2.password)
    {
        res.send(user2);
    }
     else if (req.body.userName == user3.username && req.body.pass == user3.password)
    {
        res.send(user3);
    }
    else
    {
        res.send(falseObj);
    }
};