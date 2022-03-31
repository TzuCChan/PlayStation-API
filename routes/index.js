import { Router } from 'express';
import playstationRoutes from "./playstations.js"

const router = Router()

router.get("/", (req, res) => res.send("This is the api root!"))

router.use("/", playstationRoutes)

export default router;