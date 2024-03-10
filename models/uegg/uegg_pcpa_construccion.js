'use strict';
module.exports = (sequelize, DataTypes) => { 
    const   UeggPcpaConstruccion = sequelize.define('uegg_pcpa_construccion',{
    id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
         field: 'id'
     },
    
     idPcpaUnidadEductiva : {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'id_pcpa_unidad_eductiva'
   },
   fechaRegistro : {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'fecha_registro'
},
checkDiagnosticoPcpa : {
         type: DataTypes.BOOLEAN,
         allowNull: true,
         field: 'check_diagnostico_pcpa'
     },
    estado: {
         type: DataTypes.STRING,
         allowNull: true,
         field: 'estado'
     },
     usuCre : {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'usu_cre'
   },
   usuMod : {
      type: DataTypes.STRING,
      allowNull: true,
      field: 'usu_mod'
   },   
   fecCre   : {
         type: DataTypes.DATE,
         allowNull: true,
         field: 'fec_cre'
     },
     fecMod : {
         type: DataTypes.DATE,
         allowNull: true,
         field: 'fec_mod'
     }
    }, 
    {   
        tableName: 'uegg_pcpa_construccion',       
        timestamps: false,     });    
        UeggPcpaConstruccion.associate = function(models) {       
     };  
     return UeggPcpaConstruccion; };
     