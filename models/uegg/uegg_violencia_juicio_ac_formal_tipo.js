'use strict';
module.exports = (sequelize, DataTypes) => {
  const UeggViolenciaJuicioAcFormalTipo = sequelize.define('uegg_violencia_jucio_ac_formal_tipo', {
    id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    
    estado: DataTypes.STRING,
    usu_cre: DataTypes.STRING,
    usu_mod: DataTypes.STRING,
    fec_cre: DataTypes.DATE,
    fec_mod: DataTypes.DATE
  }, {
      tableName: 'uegg_violencia_jucio_ac_formal_tipo',
      timestamps: false
    });
     UeggViolenciaJuicioAcFormalTipo.associate = function(models) {      
    
    };     return UeggViolenciaJuicioAcFormalTipo; };