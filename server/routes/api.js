const express = require('express');
const router = express.Router();
const mongo = require('mongoose');

const db = mongo.connect("mongodb://localhost:27017/PokemonQuiz", function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to ' + db, ' + ', response)
  }
})

router.get('/', (req, res) => {
  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.send('###call api###');
});

var schema = mongo.Schema;
var UserSchema = new schema({
  userId: {
    type: String
  },
  nickName: {
    type: String
  },
})

var model = mongo.model('users', UserSchema, 'users');

router.post("/users", function (req, res) {
  var user = new model(req.body);
  user.save(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "INSERT COMPLETE!"
      })
    }
  })
})

router.put("/users", function (req, res) {
  model.findByIdAndUpdate(req.body._id, {
      userId: req.body.userId,
      nickName: req.body.nickName
    },
    function (err, data) {
      if (err) {
        res.send(err)
      } else {
        res.send({
          data: "UPDATE COMPLETE!"
        })
      }
    })
})

router.get("/users", function (req, res) {
  // model.findById(req.body._id,
  model.find({},
    function (err, data) {
      if (err) {
        res.send(err)
      } else {
        res.send(data)
      }
    })
})

module.exports = router;
