import express from "express"
import cors from "cors"
import { ENV } from "./common/env"
import bodyParser from "body-parser"
import { router } from "./routes/routes"


const app = express()

app.use(bodyParser.json())

if (!ENV.PRODUCTION) {
    app.use(cors())
}

app.use(router)

app.listen(ENV.PORT)