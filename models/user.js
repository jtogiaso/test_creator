module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define("User", {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
      allowNull: false,
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
       model: role,
       key: 'id'
      }
    }
  });
  return User;
};