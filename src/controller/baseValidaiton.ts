const Joi = require('joi');
const authSchema = Joi.object ({
    name : Joi.string().min(3).max(30).required(),
    genre : Joi.string().min(3).max(20).required(),
    id : Joi.number().required()

})

module.exports = {
    authSchema
}