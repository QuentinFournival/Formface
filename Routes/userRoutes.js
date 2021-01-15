const express = require('express');
const {create, login, golog, sendFormAdmin, forgotPass, forgot,updatePass} = require('../Controllers/userController');
const router = express.Router();


router.route('/login').post(login)
.get(golog)

router.route('/').get()
                .post(create)
router.route('/envoiFormulaire').post(sendFormAdmin)

router.route('/forgot').post(forgotPass)

router.route('/forgot/:id').get(forgot)
                           .post(updatePass)

module.exports = router;

