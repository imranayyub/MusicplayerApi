/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const  User=require('../models/User');
module.exports = {
  login:function (req, res, next) {
   User.login(req, res, next);

  },

  register:function (req, res, next) {
    User.register(req, res, next);
  }


};

