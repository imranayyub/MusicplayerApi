

const mongoose= require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/user',
{useMongoClient : true});

const UserSchema=mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique : true
  },
  password: {
    type: String,
    required: true

  },
  phone: {
    type: String,
    required: true,
    unique : true

  }
});
const User= module.exports=mongoose.model('User',UserSchema);
module.exports={

  login:function (req, res, next) {
    var username=req.body.username;
    var password=req.body.password;
    User.findOne({username : username, password : password},function (err,user) {
      res.setHeader('Content-Type', 'application/json');
      if(err)
      {
        console.log(err);
        return res.status(500).send();
      }
      if(!user)
      {
        return res.status(404).send(JSON.stringify({found : "not found"}));
      }
      return res.send(JSON.stringify({ found : "Found"}));

    });

  },

  register:function (req, res, next) {
    var username=req.body.username;
    var password=req.body.password;
    var phone=req.body.phone;

    var newuser = new User;
    newuser.username=username;
    newuser.password=password;
    newuser.phone=phone;

    newuser.save(function (err,saveduser) {
      res.setHeader('Content-Type', 'application/json');
      if(err)
      {
        console.log(err);
        return res.status(500).send();
      }
      // res.send();
      return res.status(200).send(JSON.stringify({ username: username , password : password , phone: phone}, null, 3));
    });

  }
  
};
