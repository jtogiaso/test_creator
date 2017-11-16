module.exports = function(sequelize, DataTypes) {
  let Question = sequelize.define("Question", {
    question_phrase: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    test_origin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
       model: Test,
       key: 'id'
      }
    }
  });
  return Question;
};