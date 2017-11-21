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
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  });  
  Answer.associate = function(models) {
    Answer.belongsTo(models.Question, {
      foreignKey: {
       allowNull: false
      }
    });
  };

  return Answer;
};



