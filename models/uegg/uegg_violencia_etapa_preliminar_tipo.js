'use strict';
module.exports = (sequelize, DataTypes) => {
  const UeggViolenciaEtapaPreliminarTipo = sequelize.define('uegg_violencia_etapa_preliminar_tipo', {
    id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    
    estado: DataTypes.STRING,
    usu_cre: DataTypes.STRING,
    usu_mod: DataTypes.STRING,
    fec_cre: DataTypes.DATE,
    fec_mod: DataTypes.DATE
  }, {
      tableName: 'uegg_violencia_etapa_preliminar_tipo',
      timestamps: false
    });
    UeggViolenciaEtapaPreliminarTipo.associate = function(models) {      
    
    };     return UeggViolenciaEtapaPreliminarTipo; };