'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    matricula: DataTypes.STRING,
    nome: DataTypes.STRING,
    dataNascimento: DataTypes.DATE,
    alergia: DataTypes.STRING,
    dataMatricula: DataTypes.DATE
  }, {
    hooks: {
      beforeSave: async student => {
        student.dataMatricula = new Date();
        student.matricula = `${Date.now()}-${student.nome.slice(0,3)}`;
      }
    }
  });
  Student.associate = function(models) {
    // associations can be defined here
  };
  
  return Student;
};