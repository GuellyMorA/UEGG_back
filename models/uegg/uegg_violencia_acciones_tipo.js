'use strict';
module.exports = (sequelize, DataTypes) => {
  const UeggViolenciahAccionesTipo = sequelize.define('uegg_violencia_acciones_tipo', {
    id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    
    estado: DataTypes.STRING,
    usu_cre: DataTypes.STRING,
    usu_mod: DataTypes.STRING,
    fec_cre: DataTypes.DATE,
    fec_mod: DataTypes.DATE
  }, {
      tableName: 'uegg_violencia_acciones_tipo',
      timestamps: false
    });
    UeggViolenciahAccionesTipo.associate = function(models) {      
    
    };     return UeggViolenciahAccionesTipo; };