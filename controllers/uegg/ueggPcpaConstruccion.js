const UeggPcpaConstruccion = require('../../models/uegg').uegg_pcpa_construccion ; 

module.exports = {                                                                                                                                                                                                                                                                                                                                                                                                                             
    list(req, res) {
        return UeggPcpaConstruccion
            .findAll({})
            .then((ueggPcpaConstruccion) => res.status(200).send(ueggPcpaConstruccion)) 
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id); 
        return UeggPcpaConstruccion
            .findByPk(req.params.id)
            .then((ueggPcpaConstruccion) => { 
                console.log(ueggPcpaConstruccion);
                if (!ueggPcpaConstruccion) {
                    return res.status(404).send({
                        message: 'UeggPcpaConstruccion no encontrado',
                    });
                }
                return res.status(200).send(ueggPcpaConstruccion); 
            })
            .catch((error) => res.status(400).send(error));
    },

    
    add(req, res) {
        return UeggPcpaConstruccion.create({
            id_pcpa_unidad_eductiva: req.body.id_pcpa_unidad_eductiva ,

            fecha_registro: req.body.fecha_registro   ,    
            check_diagnostico_pcpa: req.body.check_diagnostico_pcpa ,
		  
            estado: 'ACTIVO' ,
            usu_cre: req.body.usu_cre ,
            fec_cre: req.body.fec_cre 
          
        })
          .then(ueggPcpaConstruccion => res.status(201).send(ueggPcpaConstruccion))
          .catch(error => res.status(400).send(error));
      },
    
    update(req, res) {
        console.log(UeggPcpaConstruccion);
        return UeggPcpaConstruccion.findByPk(req.params.Id, {})
          .then(ueggPcpaConstruccion => {
            if (!ueggPcpaConstruccion) {
              return res.status(404).send({
                message: "ueggPcpaConstruccion Not Found"
              });
            }
            return ueggPcpaConstruccion
              .update({
                id_pcpa_unidad_eductiva: req.body.id_pcpa_unidad_eductiva ||  ueggPcpaConstruccion.id_pcpa_unidad_eductiva  ,
                fecha_registro: req.body.fecha_registro  ||  ueggPcpaConstruccion.fecha_registro  ,
                check_diagnostico_pcpa: req.body.check_diagnostico_pcpa  ||  ueggPcpaConstruccion.check_diagnostico_pcpa  ,
		   
                estado: 'MODIFICADO',  
                usu_mod: req.body.usu_mod ,
                fec_mod: req.body.fec_mod
              })
              .then(() =>{  
                 console.log(' *************SI UPDATE OK');
                 res.status(200).send(ueggPcpaConstruccion)   })
              .catch(error => {
                console.log(' *************ERROR UPDATE 1', error);
                res.status(400).send(error)  });
          })
          .catch(error => {
            console.log(' *************ERROR UPDATE 2',  error);
            res.status(400).send(error)  });
      },
    
    delete(req, res) {
        return UeggPcpaConstruccion.findByPk(req.params.Id)
          .then(ueggPcpaConstruccion => {
            if (!ueggPcpaConstruccion) {
              return res.status(400).send({
                message: "ueggPcpaConstruccion Not Found"
              });
            }
            return ueggPcpaConstruccion
              .destroy()
              .then(() =>{
                console.log(' ************SI DELETE OK');
                 res.status(204).send() }  )
              .catch(error => res.status(400).send(error));
          })
          .catch(error => res.status(400).send(error));
      }
    

};