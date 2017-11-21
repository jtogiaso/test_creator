module.exports = function(sequelize, DataTypes) {
  let Result = sequelize.define("Result", {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Result.associate = function(models) {
    Result.belongsTo(models.Test, 
    {
      foreignKey: {
       allowNull: false
      }
    });
    Result.belongsTo(models.User, 
      {
        foreignKey: {
          allowNull: false
        }
      });
  };
  return Result;
};