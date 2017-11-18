module.exports = function(sequelize, DataTypes) {
  let Test = sequelize.define("Test", {
    test_name: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        len: [1, 140]
      }
    }
  });
    
  Test.associate = function(models) {
    Test.belongsTo(models.User, {
      foreignKey: {
       allowNull: false
      }
    });
    Test.hasMany(models.Question, 
      {
        onDelete: "cascade"
      }
    );
  };
  return Test;
};