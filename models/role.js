module.exports = function(sequelize, DataTypes) {
  let Role = sequelize.define("Role", {
    role_type: {
      type: DataTypes.STRING
    }
  });
  return Role;
};