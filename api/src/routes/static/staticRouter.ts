import { Request, Response } from "express";
import fs from "fs"


export async function configController(req: Request, res: Response) {

    try {
        const data = fs.readFileSync("static/config.json", "utf-8")
        res.send(data).status(200)
    } catch {
        res.status(500)
    }
}