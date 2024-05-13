import { body, param, ValidationChain } from "express-validator";


type StringNotEmpty = {
    lengths:{ [key: string]: { min: number, max: number }} 
    key: string,
    isBody?: boolean
}

export function stringNotEmpty({ key, lengths, isBody = true }: StringNotEmpty): ValidationChain {

    const name = key.slice(0, 1).toUpperCase() + key.slice(1)
    const { min, max } = lengths[key]
    const validation = (isBody ? body(key) : param(key)) 

    return validation
        .trim()
        .escape()
        .exists()
        .notEmpty()
        .withMessage(`'${name}' is required.`)
        .bail()

        .isString()
        .isLength({ min, max })
        .withMessage(`'${name}' length must be between ${min} and ${max} characters.`)
        .bail()
}