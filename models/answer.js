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
    }
  });
  Answer.associate = function(models) {
    Post.belongsTo(models.question, {
      foreignKey: {
        type: DataTypes.INTEGER,
        name: question_id
        allowNull: false
      }
    });
  };

  return Answer;
};



