const InfraProximoTipo = require('../../models/infraestructura').infraProximoTipo ;

module.exports = {
	list(req, res) {
		return InfraProximoTipo
			.findAll({})
			.then((infraProximoTipo) => res.status(200).send(infraProximoTipo))
			.catch((error) => { res.status(400).send(error); });
	},

	getById(req, res) {console.log(req.params.id);//.findOne({id:req.params.id})
		return InfraProximoTipo
			.findByPk(req.params.id)
			.then((infraProximoTipo) => {console.log(infraProximoTipo);
				if (!infraProximoTipo) {
					return res.status(404).send({
						message: 'usuario Not Found',
					});
				}
				return res.status(200).send(infraProximoTipo);
			})
			.catch((error) => res.status(400).send(error));
	},

};