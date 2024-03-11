'use strict';
module.exports = (sequelize, DataTypes) => {
  const UeggViolenciaRecRevTipo = sequelize.define('uegg_violencia_rec_rev_tipo', {
    id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    
    estado: DataTypes.STRING,
    usu_cre: DataTypes.STRING,
    usu_mod: DataTypes.STRING,
    fec_cre: DataTypes.DATE,
    fec_mod: DataTypes.DATE
  }, {
      tableName: 'uegg_violencia_rec_rev_tipo',
      timestamps: false
    });
    UeggViolenciaRecRevTipo.associate = function(models) {      
    
    };     return UeggViolenciaRecRevTipo; };