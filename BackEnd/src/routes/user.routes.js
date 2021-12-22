import { Router } from "express";
import {userControllers} from '../controllers/user.controllers'



const router = Router();

router.get('/', userControllers)



export default router;