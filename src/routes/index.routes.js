import { Router } from "express";
import { getRoot, getRootSedentarismo, getRootAboutUs } from "../controllers/index.controller.js";


const router = Router();

router.get('/', getRoot);
router.get('/sedentarismo', getRootSedentarismo);
router.get('/aboutUs', getRootAboutUs);

export default router;
