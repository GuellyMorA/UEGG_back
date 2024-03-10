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

};