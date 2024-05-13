import { Request, Response } from "express"
import { ApiRoutes, ApiRequest } from "../../../../shared/routes"
import { stringNotEmpty } from "../validators"


type keys = keyof ApiRequest[ApiRoutes.Register]

const params: { [key in keys]: string} = {
    email: "email",
    name: "name",
    password: "password"
}

const lengths: { [key in keys]: { min: number, max: number }} = {
    email: { min: 3, max: 100 },
    password: { min: 8, max: 100 },
    name: { min: 4, max: 100 }
}

const emailValidator =
    stringNotEmpty({ key: params.email, lengths })
    .isEmail()
    .withMessage("Email not valid.")
    .customSanitizer((email: string) => email.toLocaleLowerCase())

const passwordValidator = stringNotEmpty({ key: params.password, lengths })

const nameValidator = stringNotEmpty({ key: params.name, lengths })


export const registerValidators = [ emailValidator, passwordValidator, nameValidator ]

export function registerController(req: Request, res: Response) {

    res.send("Success.").status(200)
}
