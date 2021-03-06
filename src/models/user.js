'use strict';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nome: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    hooks: {
      beforeSave: async user => {
        if(user.senha) {
          user.senha = await bcrypt.hash(user.senha, 10);
        }
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };

  User.prototype.checkPassword = function(password) {
    return bcrypt.compare(password, this.senha);
  }

  User.prototype.generateToken = function() {
    return jwt.sign({ id: this.id }, process.env.SECRET, { expiresIn: 86400 });
  }

  return User;
};