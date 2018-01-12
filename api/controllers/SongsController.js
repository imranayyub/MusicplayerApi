/**
 * SongsController
 *
 * @description :: Server-side logic for managing songs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
const Musiclist = require('../models/MusicList');
module.exports = {
  playlist: function (req, res, next) {
    Musiclist.getplaylist(req,res,next);
  },


  addSong: function (req, res, next) {
    Musiclist.addSong(req, res, next);
  },

  deleteSong: function (req, res, next) {
  Musiclist.deleteSong(req, res, next);
  }


};

