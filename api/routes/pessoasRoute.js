const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router ()

router.get('/pessoas', PessoaController.pegaTodasPessoas)
router.get('/pessoas/:id', PessoaController.pegaPessoa)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)


module.exports = router
