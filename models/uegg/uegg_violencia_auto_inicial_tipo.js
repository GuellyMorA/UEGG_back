'use strict';
module.exports = (sequelize, DataTypes) => {
  const UeggViolenciaAutoInicialTipo = sequelize.define('uegg_violencia_auto_inicial_tipo', {
    id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    
    estado: DataTypes.STRING,
    usu_cre: DataTypes.STRING,
    usu_mod: DataTypes.STRING,
    fec_cre: DataTypes.DATE,
    fec_mod: DataTypes.DATE
  }, {
      tableName: 'uegg_violencia_auto_inicial_tipo',
      timestamps: false
    });
    UeggViolenciaAutoInicialTipo.associate = function(models) {      
    
    };     return UeggViolenciaAutoInicialTipo; };