const UeggPcpaMiembroTipo = require('../../models/uegg').uegg_pcpa_miembro_tipo ; 

module.exports = {                                                                                                                                                                                                                                                                                                                                                                                                                             
    list(req, res) {
        return UeggPcpaMiembroTipo
            .findAll({})
            .then((ueggPcpaMiembroTipo) => res.status(200).send(ueggPcpaMiembroTipo)) 
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id); 
        return UeggPcpaMiembroTipo
            .findByPk(req.params.id)
            .then((ueggPcpaMiembroTipo) => { 
                console.log(ueggPcpaMiembroTipo);
                if (!ueggPcpaMiembroTipo) {
                    return res.status(404).send({
                        message: 'UeggPcpaMiembroTipo no encontrado',
                    });
                }
                return res.status(200).send(ueggPcpaMiembroTipo); 
            })
            .catch((error) => res.status(400).send(error));
    },

};