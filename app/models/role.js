module.exports = function(sequelize, DataTypes) {
  let Role = sequelize.define("Role", {
    role_type: {
      type: DataTypes.STRING
    }
  });

  Role.associate = function(models) {
    Role.hasMany(models.User, {
        onDelete: "cascade"
    });
  };

  return Role;
};