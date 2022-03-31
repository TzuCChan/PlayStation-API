import { Router } from 'express';
import * as controllers from "../controllers/playstations.js"

const router = Router()

router.get("/playstations", controllers.getPlaystations)
router.get("/playstations/:id", controllers.getPlaystation)
router.post("/playstations", controllers.createPlaystation)
router.put("/playstations/:id", controllers.updatePlaystation)
router.delete("/playstations/:id", controllers.deletePlaystation)

export default router;