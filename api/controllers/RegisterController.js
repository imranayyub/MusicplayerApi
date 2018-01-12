/**
 * RegisterController
 *
 * @description :: Server-side logic for managing registers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const express = require('express');
var User=require('../models/User');
module.exports = {
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

