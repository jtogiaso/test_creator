module.exports = function(sequelize, DataTypes) {
  let Answer = sequelize.define("Answer", {
    answer_phrase: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    correct_answer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    question_origin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
       model: question,
       key: 'id'
      }
    }
  });
  return Answer;
};