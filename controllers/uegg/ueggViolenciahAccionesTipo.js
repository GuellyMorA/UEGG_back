const UeggViolenciahAccionesTipo = require('../../models/uegg').uegg_violencia_acciones_tipo ; 

module.exports = {
    list(req, res) {
        return UeggViolenciahAccionesTipo
            .findAll({})
            .then((ueggViolenciahAccionesTipo) => res.status(200).send(ueggViolenciahAccionesTipo)) 
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id);
        return UeggViolenciahAccionesTipo
            .findByPk(req.params.id)
            .then((ueggViolenciahAccionesTipo) => { 
                console.log(ueggViolenciahAccionesTipo);
                if (!ueggViolenciahAccionesTipo) {
                    return res.status(404).send({
                        message: 'UeggViolenciahAccionesTipo no encontrado',
                    });
                }
                return res.status(200).send(ueggViolenciahAccionesTipo);
            })
            .catch((error) => res.status(400).send(error));
    },



    add(req, res) {
        return UeggViolenciahAccionesTipo.create({
           
            estado: 'ACTIVO' ,
            usu_cre: req.body.usu_cre ,
            fec_cre: req.body.fec_cre 
          
        })
          .then(ueggViolenciahAccionesTipo => res.status(201).send(ueggViolenciahAccionesTipo))
          .catch(error => res.status(400).send(error));
      },
    
      update(req, res) {
        console.log(UeggViolenciahAccionesTipo);
        return UeggViolenciahAccionesTipo.findByPk(req.params.Id, {})
          .then(ueggViolenciahAccionesTipo => {
            if (!ueggViolenciahAccionesTipo) {
              return res.status(404).send({
                message: "ueggViolenciahAccionesTipo Not Found"
              });
            }
            return ueggViolenciahAccionesTipo
              .update({
               
                estado: 'MODIFICADO',  
                usu_mod: req.body.usu_mod ,
                fec_mod: req.body.fec_mod
              })
              .then(() =>{  
                 console.log(' *************SI UPDATE OK');
                 res.status(200).send(ueggViolenciahAccionesTipo)   })
              .catch(error => {
                console.log(' *************ERROR UPDATE 1', error);
                res.status(400).send(error)  });
          })
          .catch(error => {
            console.log(' *************ERROR UPDATE 2',  error);
            res.status(400).send(error)  });
      },
    
      delete(req, res) {
        return UeggViolenciahAccionesTipo.findByPk(req.params.Id)
          .then(ueggViolenciahAccionesTipo => {
            if (!ueggViolenciahAccionesTipo) {
              return res.status(400).send({
                message: "ueggViolenciahAccionesTipo Not Found"
              });
            }
            return ueggViolenciahAccionesTipo
              .destroy()
              .then(() =>{
                console.log(' ************SI DELETE OK');
                 res.status(204).send() }  )
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }
    



};