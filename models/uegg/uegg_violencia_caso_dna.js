'use strict';
module.exports = (sequelize, DataTypes) => {
  const UeggViolenciaCasoDna = sequelize.define('uegg_violencia_caso_dna', {
    id: DataTypes.INTEGER,
    id_num_caso: DataTypes.INTEGER,
    id_violencia_victima: DataTypes.INTEGER,
    id_violencia_agresor_nombre: DataTypes.INTEGER,
    id_violencia_hecho_tipo: DataTypes.INTEGER,
    desc_hecho: DataTypes.STRING,
    recepcion_ficha: DataTypes.BOOLEAN,
  
    estado: DataTypes.STRING,
    usu_cre: DataTypes.STRING,
    usu_mod: DataTypes.STRING,
    fec_cre: DataTypes.DATE,
    fec_mod: DataTypes.DATE
  }, {
      tableName: 'uegg_violencia_caso_dna',
      timestamps: false
    });
    UeggViolenciaCasoDna.associate = function(models) {      
    
    };     return UeggViolenciaCasoDna; };