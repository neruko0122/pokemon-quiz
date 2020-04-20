const express = require("express");
const router = express.Router();
const mongo = require("mongoose");
const environment = require("../../src/environments/environment.prod.js");

console.log(process.env.NODE_ENV)
const db = mongo.connect(environment.MONGDB_URI, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log("connected to " + db, " + ", response);
  }
});

router.get("/", (req, res) => {
  res.header("Content-Type", "text/plain;charset=utf-8");
  res.send("###call api###");
});

var schema = mongo.Schema;
var UserSchema = new schema({
  userId: {
    type: String
  },
  password: {
    type: String
  },
  nickName: {
    type: String
  },
  lastLoginDate: {
    type: Date
  }
});

var AnswerSchema = new schema({
  userId: {
    type: String
  },
  range: {
    type: [String]
  },
  level: {
    type: [String]
  },
  answers: {
    type: [Object]
  }
});

var users = mongo.model("users", UserSchema, "users");
var answers = mongo.model("answers", AnswerSchema, "answers")

router.post("/users", function (req, res) {
  var user = new users(req.body);
  user.save(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "INSERT COMPLETE!"
      });
    }
  });
});

router.put("/users", function (req, res) {
  users.findByIdAndUpdate(
    req.body._id, {
      userId: req.body.userId,
      nickName: req.body.nickName
    },
    function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.send({
          data: "UPDATE COMPLETE!"
        });
      }
    }
  );
});

router.get("/users", function (req, res) {
  users.findById(req.body._id, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.get("/users/list", function (req, res) {
  users.find({}, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

router.post("/answers", function (req, res) {
  var answer = new answers(req.body);
  answer.save(function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send({
        data: "INSERT COMPLETE!"
      });
    }
  });
});

router.get("/answers", function (req, res) {
  answers.findById(req.body._id, function (err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
