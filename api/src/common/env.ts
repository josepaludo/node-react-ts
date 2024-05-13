import { load } from "ts-dotenv"

export const ENV = load({
    PORT: Number,
    PRODUCTION: Boolean
})