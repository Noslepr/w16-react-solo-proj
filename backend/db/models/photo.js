'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    }
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Photo;
};
