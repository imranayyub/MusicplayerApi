const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/musiclist',
  {useMongoClient : true});

const MusicSchema = mongoose.Schema({
  song_name: {
    type: String,
    required: true,
    unique :true
  },
  artist_name: {
    type: String,
    required: true

  },
  duration: {
    type: String,
    required: true
  },
  bitrate: {
    type: String,
    required: true
  },
  song_title: {
    type: String,
    required: true,
    unique : true
  },
  album_art: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  album: {
    type: String,
    required: true
  }
});
const Music = module.exports = mongoose.model('Music', MusicSchema);
module.exports={

getplaylist :function (req, res, next) {
    Music.find(function (err,musiclist) {
      res.json(musiclist);
    });

  },

  addSong: function (req, res, next) {
    var newMusiclist = new Music({
      song_name: req.body.song_name,
      artist_name: req.body.artist_name,
      song_title: req.body.song_title,
      duration: req.body.duration,
      bitrate: req.body.bitrate,
      album_art: req.body.album_art,
      genre: req.body.genre,
      path: req.body.path,
      album: req.body.album
    });
    newMusiclist.save(function (err, musiclist) {
      res.setHeader('Content-Type', 'application/json');
      if (err) {
        res.status(500).json({msg: 'Failed to add to Musiclist'});
      }
      else {
        res.json({msg: 'Added successfully'});
      }
    });
  },

  deleteSong:function (req, res, next) {
    var song_name=req.body.song_name;

    Music.findOne({song_name : song_name},function (err,result) {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }

      else {
        Music.remove({song_name: song_name}, function (err, result) {
          if (err) {
            res.json(err);
          }
          else {
            res.json(result);
          }
        });
      }
    });
  }


}
