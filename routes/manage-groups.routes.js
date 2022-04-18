const Router = require('express')
const router = new Router
const groupController = require('../controller/manage-groups.controllers')

router.post('/manage-group', groupController.createGroup)
router.get('/manage-group', groupController.getGroups)
//router.get('/manage-group/:id', groupController.getGroup)
router.put('/manage-group/:id', groupController.updateGroup)
router.delete('/manage-group/:id', groupController.deleteGroup)

module.exports = router


