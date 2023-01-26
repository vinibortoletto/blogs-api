module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },

      display_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      tableName: 'users',
    }
  );

  return User;
};
