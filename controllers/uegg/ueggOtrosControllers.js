const UeggPcpaUnidadEductiva = require('../../models/uegg').uegg_pcpa_unidad_eductiva ; 

module.exports = {
    list(req, res) {
        return UeggPcpaUnidadEductiva
            .findAll({})
            .then((ueggPcpaUnidadEductiva) => res.status(200).send(ueggPcpaUnidadEductiva)) 
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return UeggPcpaUnidadEductiva
            .findByPk(req.params.id)
            .then((ueggPcpaUnidadEductiva) => { 
                console.log(ueggPcpaUnidadEductiva);
                if (!ueggPcpaUnidadEductiva) {
                    return res.status(404).send({
                        message: 'UeggPcpaUnidadEductiva no encontrado',
                    });
                }
                return res.status(200).send(ueggPcpaUnidadEductiva);
            })
            .catch((error) => res.status(400).send(error));
    },



    add(req, res) {
        return UeggPcpaUnidadEductiva.create({
            nombres_director: req.body.nombres_director ,
            apellidos_director: req.body.apellidos_director,
            cod_rda_director: req.body.cod_rda_director ,
            cod_director: req.body.cod_director ,
            estado: 'ACTIVO' ,
            usu_cre: req.body.usu_cre ,
            fec_cre: req.body.fec_cre 
          
        })
          .then(ueggPcpaUnidadEductiva => res.status(201).send(ueggPcpaUnidadEductiva))
          .catch(error => res.status(400).send(error));
      },
    
      update(req, res) {
        console.log(UeggPcpaUnidadEductiva);
        return UeggPcpaUnidadEductiva.findByPk(req.params.Id, {})
          .then(ueggPcpaUnidadEductiva => {
            if (!ueggPcpaUnidadEductiva) {
              return res.status(404).send({
                message: "ueggPcpaUnidadEductiva Not Found"
              });
            }
            return ueggPcpaUnidadEductiva
              .update({
                nombres_director: req.body.nombres_director  || ueggPcpaUnidadEductiva.nombres_director,
                apellidos_director: req.body.apellidos_director || ueggPcpaUnidadEductiva.apellidos_director,
                cod_rda_director: req.body.cod_rda_director || ueggPcpaUnidadEductiva.cod_rda_director,
                cod_director: req.body.cod_director || ueggPcpaUnidadEductiva.cod_director,
                estado: 'MODIFICADO',   //req.body.estado
                usu_mod: req.body.usu_mod ,
                fec_mod: req.body.fec_mod
              })
              .then(() =>{  
                 console.log(' *************SI UPDATE OK');
                 res.status(200).send(ueggPcpaUnidadEductiva)   })
              .catch(error => {
                console.log(' *************ERROR UPDATE 1', error);
                res.status(400).send(error)  });
          })
          .catch(error => {
            console.log(' *************ERROR UPDATE 2',  error);
            res.status(400).send(error)  });
      },
    
      delete(req, res) {
        return UeggPcpaUnidadEductiva.findByPk(req.params.Id)
          .then(ueggPcpaUnidadEductiva => {
            if (!ueggPcpaUnidadEductiva) {
              return res.status(400).send({
                message: "ueggPcpaUnidadEductiva Not Found"
              });
            }
            return ueggPcpaUnidadEductiva
              .destroy()
              .then(() =>{
                console.log(' ************SI DELETE OK');
                 res.status(204).send() }  )
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }
    



};