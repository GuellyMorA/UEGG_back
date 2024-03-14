const UeggPcpaMiembroComision = require('../../models/uegg').uegg_pcpa_miembro_comision ; 

module.exports = {                                                                                                                                                                                                                                                                                                                                                                                                                             
    list(req, res) {
        return UeggPcpaMiembroComision
            .findAll({})
            .then((ueggPcpaMiembroComision) => res.status(200).send(ueggPcpaMiembroComision)) 
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id); 
        return UeggPcpaMiembroComision
            .findByPk(req.params.id)
            .then((ueggPcpaMiembroComision) => { 
                console.log(ueggPcpaMiembroComision);
                if (!ueggPcpaMiembroComision) {
                    return res.status(404).send({
                        message: 'UeggPcpaMiembroComision no encontrado',
                    });
                }
                return res.status(200).send(ueggPcpaMiembroComision); 
            })
            .catch((error) => res.status(400).send(error));
    },

    add(req, res) {
        return UeggPcpaMiembroComision.create({
            id_pcpa_construccion: req.body.id_pcpa_construccion,
            id_pcpa_comision_tipo: req.body.id_pcpa_comision_tipo,
            id_pcpa_miembro_tipo: req.body.id_pcpa_miembro_tipo,
            orden: req.body.orden,
            nombres_miembro: req.body.nombres_miembro,
            apellidos_miembro: req.body.apellidos_miembro,
            check_miembro_comision: req.body.check_miembro_comision,
                      
            estado: 'ACTIVO' ,
            usu_cre: req.body.usu_cre ,
            fec_cre: req.body.fec_cre 
          
        })
          .then(ueggPcpaMiembroComision => res.status(201).send(ueggPcpaMiembroComision))
          .catch(error => res.status(400).send(error));
      },
    
    update(req, res) {
        console.log(UeggPcpaMiembroComision);
        return UeggPcpaMiembroComision.findByPk(req.params.Id, {})
          .then(ueggPcpaMiembroComision => {
            if (!ueggPcpaMiembroComision) {
              return res.status(404).send({
                message: "ueggPcpaMiembroComision Not Found"
              });
            }
            return ueggPcpaMiembroComision
              .update({
                id_pcpa_construccion: req.body.id_pcpa_construccion || ueggPcpaMiembroComision.id_pcpa_construccion,
                id_pcpa_comision_tipo: req.body.id_pcpa_comision_tipo || ueggPcpaMiembroComision.id_pcpa_comision_tipo,
                id_pcpa_miembro_tipo: req.body.id_pcpa_miembro_tipo || ueggPcpaMiembroComision.id_pcpa_miembro_tipo,
                orden: req.body.orden || ueggPcpaMiembroComision.orden,
                nombres_miembro: req.body.nombres_miembro || ueggPcpaMiembroComision.nombres_miembro,
                apellidos_miembro: req.body.apellidos_miembro || ueggPcpaMiembroComision.apellidos_miembro,
                check_miembro_comision: req.body.check_miembro_comision || ueggPcpaMiembroComision.check_miembro_comision,
                
                estado: 'MODIFICADO',  
                usu_mod: req.body.usu_mod ,
                fec_mod: req.body.fec_mod
              })
              .then(() =>{  
                 console.log(' *************SI UPDATE OK');
                 res.status(200).send(ueggPcpaMiembroComision)   })
              .catch(error => {
                console.log(' *************ERROR UPDATE 1', error);
                res.status(400).send(error)  });
          })
          .catch(error => {
            console.log(' *************ERROR UPDATE 2',  error);
            res.status(400).send(error)  });
      },
    
      delete(req, res) {
        return UeggPcpaMiembroComision.findByPk(req.params.Id)
          .then(ueggPcpaMiembroComision => {
            if (!ueggPcpaMiembroComision) {
              return res.status(400).send({
                message: "ueggPcpaMiembroComision Not Found"
              });
            }
            return ueggPcpaMiembroComision
              .destroy()
              .then(() =>{
                console.log(' ************SI DELETE OK');
                 res.status(204).send() }  )
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }



};