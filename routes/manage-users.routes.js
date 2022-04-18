const Router = require('express')
const router = new Router
const userController = require('../controller/manage-users.controller')

router.post('/manage-user', userController.createUser)
router.get('/manage-user', userController.getUsers)
router.get('/manage-user/:id', userController.getUser)
router.put('/manage-user/:id', userController.updateUser)

router.put('/manage-user/update-groupname/:id', userController.updateUserGroupname)

router.delete('/manage-user/:id', userController.deleteUser)

module.exports = router

