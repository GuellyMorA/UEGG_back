const InfraInternetPersonasTipo = require('../../models/infraestructura').infra_internet_personas_tipo; // rbc infraInternetPersonasTipo;

module.exports = {
    list(req, res) {
        return InfraInternetPersonasTipo
            .findAll({})
            .then((infraInternetPersonasTipo) => res.status(200).send(infraInternetPersonasTipo)) // rbc  .then((InfraInternetPersonasTipo) => res.status(200).send(InfraInternetPersonasTipo))
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id); //.findOne({id:req.params.id})
        return InfraInternetPersonasTipo
            .findByPk(req.params.id)
            .then((infraInternetPersonasTipo) => { // rbc
                console.log(infraInternetPersonasTipo);
                if (!infraInternetPersonasTipo) {
                    return res.status(404).send({
                        message: 'InfraInternetPersonasTipo no encontrado',
                    });
                }
                return res.status(200).send(infraInternetPersonasTipo); // rbc return res.status(200).send(InfraInternetPersonasTipo);
            })
            .catch((error) => res.status(400).send(error));
    },

};