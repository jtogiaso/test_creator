// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");
// const api_controller = require("../../controllers/api_controller.js");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/new_test_name", function(req , res) {

    console.log("Someone has called upon the API!");
    res.json({
        you: true ,
        are: false,
        not: "This is thunderous!",
        here: 2
      })
  });

  app.get("api/all_tests", function(req, res) {
    //get user id
    //sequelize query
    db.Test.findAll({
      where: {
        id: //user id
      }
    }).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  app.get("api/all_questions_and_answers", function(req, res) {
    //get test id
    //sequelize query
    db.Question.find({
      where: {
        id: //test id
      }
    }).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
    //TODO: Manage Answer sequelize query
  });

  // Add a new test
  app.post("/api/new_test_name", function(req , res) {
    //get username -> current_user saved on either local_storage or session_storage
    //get req.body.test_name
    //send sequelize database the test_name
    db.Test.create(req.body).then(function(dbTest) {
      res.json(dbTest);
    });
    //return Test object
  });

  // Add a question to test
  app.post("/api/new_question_and_answers", function(req, res) {
    //get req.body.question_phrase
    //get req.body.answer_true
    //for (all other false answers that exist)
    //  get req.body.answer_false_i
    //send
    db.Question.create(req.body).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
    //TODO: Manage Answer sequelize query
  });

  app.put("/api/update_question_and_answers", function(req , res){
    //get req.body.question_phrase
    //get req.body.answer_true
    //for (all other false answers that exist)
    //  get req.body.answer_false_i
    //update
    db.Question.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }
    }).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
    //TODO: Manage Answer sequelize query
  });

  app.put("/api/update_test", function(req , res){
    //get req.body.test_name
    //update
    db.Test.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }
    }).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  app.post("/api/new_user", function(req, res) {
    //get req.body.email
    //get req.body.password
    //get req.body.name
    //send
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.put("/api/update_user", function(req, res) {
    //get req.body.email
    //get req.body.password
    //get req.body.name
    //update
    db.User.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.put("api/delete_test/:id", function(req, res) {
    //get id
    //update deleted
    db.Test.update(
      {
        deleted: true;
      },
      {
        where: {
          id: req.body.id
        }
      }
    }).then(function(dbTest) {
      res.json(dbTest);
    });
  });

  app.put("/api/delete_question/:id", function(req , res){
    //get id
    //update deleted
    db.Question.update(
      {
        deleted: true;
      },
      {
        where: {
          id: req.params.id
        }
      }
    }).then(function(dbQuestion) {
      res.json(dbQuestion);
    });
    //TODO: Manage Answer Sequelize query IF AND ONLY IF answers need to be soft deleted with its question
  });
  app.put("/api/delete_user/:id", function(req , res){
    //get id
    //update deleted
    db.User.update(
      {
        deleted: true;
      },
      {
        where: {
          id: req.params.id
        }
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
}; 
