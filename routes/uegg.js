var express = require('express');
var router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/uegg/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.pdf')//file.originalname
    }
});
const upload = multer({
    storage: storage
});


const ueggPcpaUnidadEductivaController = require('../controllers/uegg/ueggPcpaUnidadEductiva');
const ueggPcpaConstruccionController =  require('../controllers/uegg/ueggPcpaConstruccion');
const ueggPcpaComisionTipoController =  require('../controllers/uegg/ueggPcpaConstruccion');



router.get('/', function (req, res, next) {
    // res.send('respond with a resource');
    res.render('index', { title: 'API Sistema de Centros de Capacitación Técnica Privados' });
});



router.get('/ueggPcpaUnidadEductiva', ueggPcpaUnidadEductivaController.list);
router.get('/ueggPcpaConstruccion', ueggPcpaConstruccionController.list);
router.get('/ueggPcpaComisionTipo',ueggPcpaComisionTipoController.list);



module.exports = router;






/*router.get('/infraAccesoMedio/:id', InfraAccesoMedioController.getById);
router.get('/infraAccesoMedioTodo/:idpredio', InfraAccesoMedioController.getGradaRampaSenial);


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
*/
