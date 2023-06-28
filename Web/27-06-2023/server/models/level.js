'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class level extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  level.init({
    junior: DataTypes.STRING,
    begginer: DataTypes.STRING,
    middle: DataTypes.STRING,
    senior: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'level',
  });
  return level;
};