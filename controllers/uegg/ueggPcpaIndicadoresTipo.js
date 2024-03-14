const UeggPcpaIndicadoresTipo = require('../../models/uegg').uegg_pcpa_indicadores_tipo ; 

module.exports = {                                                                                                                                                                                                                                                                                                                                                                                                                             
    list(req, res) {
        return UeggPcpaIndicadoresTipo
            .findAll({})
            .then((ueggPcpaIndicadoresTipo) => res.status(200).send(ueggPcpaIndicadoresTipo)) 
            .catch((error) => { res.status(400).send(error); });
    },

    getById(req, res) {
        console.log(req.params.id); 
        return UeggPcpaIndicadoresTipo
            .findByPk(req.params.id)
            .then((ueggPcpaIndicadoresTipo) => { 
                console.log(ueggPcpaIndicadoresTipo);
                if (!ueggPcpaIndicadoresTipo) {
                    return res.status(404).send({
                        message: 'UeggPcpaIndicadoresTipo no encontrado',
                    });
                }
                return res.status(200).send(ueggPcpaIndicadoresTipo); 
            })
            .catch((error) => res.status(400).send(error));
    },

};