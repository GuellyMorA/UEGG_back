'use strict';
module.exports = (sequelize, DataTypes) => {
  const UeggViolenciaSancionTipo = sequelize.define('uegg_violencia_sancion_tipo', {
    id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    
    estado: DataTypes.STRING,
    usu_cre: DataTypes.STRING,
    usu_mod: DataTypes.STRING,
    fec_cre: DataTypes.DATE,
    fec_mod: DataTypes.DATE
  }, {
      tableName: 'uegg_violencia_sancion_tipo',
      timestamps: false
    });
    
    UeggViolenciaSancionTipo.associate = function(models) {      
    
    };     return UeggViolenciaSancionTipo; };