module.exports = function(sequelize, DataTypes) {
  let Question = sequelize.define("Question", {
    question_phrase: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    }
  });

  Question.associate = function(models) {
    Question.belongsTo(models.Test, {
      foreignKey: {
       allowNull: false
      }
    });
    Question.hasMany(models.Answer, 
      {
        onDelete: "cascade"
      }
    );
  };
  return Question;
};