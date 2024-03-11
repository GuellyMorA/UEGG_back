'use strict';
module.exports = (sequelize, DataTypes) => {
  const UeggViolenciaHechoTipo = sequelize.define('uegg_violencia_hecho_tipo', {
    id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    
    estado: DataTypes.STRING,
    usu_cre: DataTypes.STRING,
    usu_mod: DataTypes.STRING,
    fec_cre: DataTypes.DATE,
    fec_mod: DataTypes.DATE
  }, {
      tableName: 'uegg_violencia_hecho_tipo',
      timestamps: false
    });
    UeggViolenciaHechoTipo.associate = function(models) {      
    
    };     return UeggViolenciaHechoTipo };