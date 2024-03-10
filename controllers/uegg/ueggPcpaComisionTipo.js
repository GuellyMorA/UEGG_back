const UeggPcpaComisionTipo = require('../../models/uegg').uegg_pcpa_comision_tipo ; 

module.exports = {
  list(req, res) {
      return UeggPcpaComisionTipo
          .findAll({})
          .then((ueggPcpaComisionTipo) => res.status(200).send(ueggPcpaComisionTipo)) 
          .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
      console.log(req.params.id);
      return UeggPcpaComisionTipo
          .findByPk(req.params.id)
          .then((ueggPcpaComisionTipo) => { 
              console.log(ueggPcpaComisionTipo);
              if (!ueggPcpaComisionTipo) {
                  return res.status(404).send({
                      message: 'UeggPcpaComisionTipo no encontrado',
                  });
              }
              return res.status(200).send(ueggPcpaComisionTipo);
          })
          .catch((error) => res.status(400).send(error));
  },

};