const UeggViolenciaCasoCom = require('../../models/uegg').uegg_violencia_caso_com ; 

module.exports = {
    list(req, res) {
        return UeggViolenciaCasoCom
            .findAll({})
            .then((UeggViolenciaCasoCom) => res.status(200).send(UeggViolenciaCasoCom)) 
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return UeggViolenciaCasoCom
            .findByPk(req.params.id)
            .then((UeggViolenciaCasoCom) => { 
                console.log(UeggViolenciaCasoCom);
                if (!UeggViolenciaCasoCom) {
                    return res.status(404).send({
                        message: 'UeggViolenciaCasoCom no encontrado',
                    });
                }
                return res.status(200).send(UeggViolenciaCasoCom);
            })
            .catch((error) => res.status(400).send(error));
    },



    add(req, res) {
        return UeggViolenciaCasoCom.create({
            id_violencia_caso_agresor: req.body.id_violencia_caso_agresor,
            id_violencia_hecho_tipo: req.body.id_violencia_hecho_tipo,
            comunicacion_tutores: req.body.comunicacion_tutores,
            desc_hecho: req.body.desc_hecho,
            estado: 'ACTIVO' ,
            usu_cre: req.body.usu_cre ,
            fec_cre: req.body.fec_cre 
          
        })
          .then(UeggViolenciaCasoCom => res.status(201).send(UeggViolenciaCasoCom))
          .catch(error => res.status(400).send(error));
      },
    
      update(req, res) {
        console.log(UeggViolenciaCasoCom);
        return UeggViolenciaCasoCom.findByPk(req.params.Id, {})
          .then(UeggViolenciaCasoCom => {
            if (!UeggViolenciaCasoCom) {
              return res.status(404).send({
                message: "UeggViolenciaCasoCom Not Found"
              });
            }
            return UeggViolenciaCasoCom
              .update({
                id_violencia_caso_agresor: req.body.id_violencia_caso_agresor || UeggViolenciaCasoCom.id_violencia_caso_agresor,
                id_violencia_hecho_tipo: req.body.id_violencia_hecho_tipo || UeggViolenciaCasoCom.id_violencia_hecho_tipo,
                comunicacion_tutores: req.body.comunicacion_tutores || UeggViolenciaCasoCom.comunicacion_tutores,
                desc_hecho: req.body.desc_hecho || UeggViolenciaCasoCom.desc_hecho,
                estado: 'MODIFICADO',  
                usu_mod: req.body.usu_mod ,
                fec_mod: req.body.fec_mod
              })
              .then(() =>{  
                 console.log(' *************SI UPDATE OK');
                 res.status(200).send(UeggViolenciaCasoCom)   })
              .catch(error => {
                console.log(' *************ERROR UPDATE 1', error);
                res.status(400).send(error)  });
          })
          .catch(error => {
            console.log(' *************ERROR UPDATE 2',  error);
            res.status(400).send(error)  });
      },
    
      delete(req, res) {
        return UeggViolenciaCasoCom.findByPk(req.params.Id)
          .then(UeggViolenciaCasoCom => {
            if (!UeggViolenciaCasoCom) {
              return res.status(400).send({
                message: "UeggViolenciaCasoCom Not Found"
              });
            }
            return UeggViolenciaCasoCom
              .destroy()
              .then(() =>{
                console.log(' ************SI DELETE OK');
                 res.status(204).send() }  )
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }
    



};