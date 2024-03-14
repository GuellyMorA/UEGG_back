const UeggPcpaActividadesTipo = require('../../models/uegg').uegg_pcpa_actividades_tipo ; 

module.exports = {                                                                                                                                                                                                                                                                                                                                                                                                                             
    list(req, res) {
        return UeggPcpaActividadesTipo
            .findAll({})
            .then((ueggPcpaActividadesTipo) => res.status(200).send(ueggPcpaActividadesTipo)) 
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id); 
        return UeggPcpaActividadesTipo
            .findByPk(req.params.id)
            .then((ueggPcpaActividadesTipo) => { 
                console.log(ueggPcpaActividadesTipo);
                if (!ueggPcpaActividadesTipo) {
                    return res.status(404).send({
                        message: 'UeggPcpaActividadesTipo no encontrado',
                    });
                }
                return res.status(200).send(ueggPcpaActividadesTipo); 
            })
            .catch((error) => res.status(400).send(error));
    },

};