// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
const db = require("../models");
const api_controller = require("../controllers/api_controller.js");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/api/test", function(req , res) {

    console.log("Someone has called upon the API!");
    res.json({
        you: true ,
        are: false,
        not: "This is thunderous!",
        here: 2
      })
  });

  app.get("/api/all_tests", function(req, res) {
    //get user id
    //sequelize query
    db.Test.findAll({
      where: {
        UserId: req.user.id
      }
    })
    .then(function(dbTest) {
      res.json(dbTest);
    });
  });

// Add a new test
  app.post("/api/test", api_controller.create_test);

// Add a question to test
  app.post("/api/question", api_controller.create_question);

//Update a question
  app.put("/api/question", api_controller.update_question);

//Update a test name
  app.put("/api/test", api_controller.update_test_name);

//Update an answer
  app.put("/api/answer", api_controller.update_answer);

//Delete user
  app.delete("/api/user", api_controller.delete_user);

//Delete Test
  app.delete("/api/test", api_controller.delete_test);

//Delete Question
  app.delete("/api/question", api_controller.delete_question);

//Delete Answer
  app.delete("/api/answer", api_controller.delete_answer);







  // app.get("/api/:test_code" , api_controller.get_test);

  //Ajax call route
  // db.Question.findAll(
  //   {
  //     where: {
  //       TestId: req.body.TestId
  //     }
  //   }
  // )
  // .then(function(dbQuestions){
  //   let testOBJ = {}
  //   for (let i in dbQuestions){
  //     testObj[i].question=dbQuestions[i].question_phrase;
  //     db.Anwers.findAll(
  //       {
  //         where: {
  //           QuestionId: dbQuestions.question_id
  //         }
  //       }
  //     )
  //     .then(function(dbAnswers){
  //       for (let j in dbAnswers)
  //         testOBJ[i].answer[j]=dbAnswers.answer_phrase;
  //     })
  //   }
  // })

  // app.get("api/all_questions_and_answers", api_controller.
  // });
}; 
