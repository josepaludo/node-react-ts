import express from "express"
import { ApiRoutes } from "../../../shared/routes"
import { registerController, registerValidators } from "./auth/registerRouter"
import { configController } from "./static/staticRouter"


const router = express.Router()

// Auth
router.post(ApiRoutes.Register, registerValidators, registerController)

// Static
router.get(ApiRoutes.Config, configController)

export { router }
