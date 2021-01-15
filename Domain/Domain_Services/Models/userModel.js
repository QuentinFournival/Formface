const mongoose = require('mongoose');
const UserSchema = require('../../Schemas/userSchema');
const userService= require('../Schema_Services/userSchemaService')

const UserModel = mongoose.model('UserModel', UserSchema, 'USER_COLLECTION');
module.exports = UserModel;