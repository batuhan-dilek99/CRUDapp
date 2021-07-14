import Joi from "joi";
const authSchema = {
    gameValidationAdd : Joi.object().keys({
        name : Joi.string().min(3).max(30).required(),
        genre : Joi.string().min(3).max(20).required(),    
    }),

    gameIDValidation : Joi.object().keys({
        ID : Joi.number().min(1)
    }),

    gameValidationGeneral : {
        name : Joi.string().min(3).max(30).required(),
        genre : Joi.string().min(3).max(20).required(),
        id : Joi.number().required()
    }

}

export default authSchema;