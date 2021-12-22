import { Router } from "express";
import { authControllers } from "../controllers/auth.controllers";



const router = Router();

router.get('/', authControllers);


export default router;