import express from "express"
import { ApiRoutes, ApiRequest } from "../../../../shared/routes"
import { body } from "express-validator"


export const authRouter = express.Router()

const email: keyof ApiRequest[ApiRoutes.Register] = "email"

authRouter.post(
    ApiRoutes.Register,
    body(email),
    (req, res) => {
        type x = keyof ApiRequest[ApiRoutes.Login]
    }
)
