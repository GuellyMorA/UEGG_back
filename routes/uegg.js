var express = require('express');
const multer = require('multer');
const infraInternetServicio = require('../controllers/infraestructura/infraInterServicio');
const infraInternetConexionTipo = require('../controllers/infraestructura/infraInternetConexionTipo');


const InfraAccesoMedioController = require('../controllers').infraAccesoMedio;
const InfraAccesoMedioGradaRampaController = require('../controllers').infraAccesoMedioGradaRampa;

var router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads/')
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
});
const upload = multer({
    storage: storage
});
//Uso del upload en la ruta
//app.post('/api/uploadImage', upload.single('file'), ctrlFileUpload.uploadImage);

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Api Infraestructura');
});

/* Rutas para infraAccesoMedio */
router.get('/infraAccesoMedio', InfraAccesoMedioController.list);
router.get('/infraAccesoMedio/:id', InfraAccesoMedioController.getById);
router.get('/infraAccesoMedioTodo/:idpredio', InfraAccesoMedioController.getGradaRampaSenial);

/*Rutas para infraAccesoPredioTransporte */
router.get('/infraAccesoPredioTransporte', InfraAccesoPredioTransporteController.list);
router.get('/infraAccesoPredioTransporte/:id', InfraAccesoPredioTransporteController.getById);
router.post('/infraAccesoPredioTransporte', InfraAccesoPredioTransporteController.add);
router.delete('/infraAccesoPredioTransporte/:accesoId', InfraAccesoPredioTransporteController.delete);

router.get('/infraAmbienteNoPedagogicolista/:predioId/:ambienteId', InfraAmbienteController.listaAmbientesNoPedagogicos);
router.delete('/infraAmbiente/:id/:tipoAmbiente', InfraAmbienteController.deleteAmbientePedagogico);

router.put('/infraAmbienteMobiliario', InfraAmbienteMobiliarioController.update);
router.delete('/infraAmbienteMobiliario/:id', InfraAmbienteMobiliarioController.delete);
router.get('/infraAmbienteMobiliarios/:id', InfraAmbienteMobiliarioController.getByAmbienteId);

router.put('/infraCaracteristicaConstruccion/:id', InfraCaracteristicaConstruccionController.update);
router.post('/infraCaracteristicaConstruccioNuevo', InfraCaracteristicaConstruccionController.addCaracteristica);
router.get('/listaCaracteristicaConstruccion/:predioId', InfraCaracteristicaConstruccionController.listaCaracteristica);

module.exports = router;