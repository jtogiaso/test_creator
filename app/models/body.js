module.exports = function(sequelize, DataTypes) {
  let Body = sequelize.define("Body", {
    body: {
      type: DataTypes.JSON,
      allowNull: false
    }
  });

  return Body;
};



