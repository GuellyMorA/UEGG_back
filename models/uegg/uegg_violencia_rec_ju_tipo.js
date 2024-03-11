'use strict';
module.exports = (sequelize, DataTypes) => {
  const UeggViolenciaRecJuTipo = sequelize.define('uegg_violencia_rec_ju_tipo', {
    id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    
    estado: DataTypes.STRING,
    usu_cre: DataTypes.STRING,
    usu_mod: DataTypes.STRING,
    fec_cre: DataTypes.DATE,
    fec_mod: DataTypes.DATE
  }, {
      tableName: 'uegg_violencia_rec_ju_tipo',
      timestamps: false
    });
    UeggViolenciaRecJuTipo.associate = function(models) {      
    
    };     return UeggViolenciaRecJuTipo; };