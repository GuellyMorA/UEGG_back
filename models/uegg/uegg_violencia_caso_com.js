'use strict';
module.exports = (sequelize, DataTypes) => {
  const UeggViolenciaCasoCom = sequelize.define('uegg_violencia_caso_com', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: 'id'
  },
    id_violencia_caso_agresor: DataTypes.INTEGER,
    id_violencia_hecho_tipo: DataTypes.INTEGER,
    comunicacion_tutores: DataTypes.BOOLEAN,
    desc_hecho: DataTypes.STRING,
               	    
    estado: DataTypes.STRING,
    usu_cre: DataTypes.STRING,
    usu_mod: DataTypes.STRING,
    fec_cre: DataTypes.DATE,
    fec_mod: DataTypes.DATE
  }, {
      tableName: 'uegg_violencia_caso_com',
      timestamps: false
    });
      UeggViolenciaCasoCom.associate = function(models) {      
    };
      return UeggViolenciaCasoCom; 
  };