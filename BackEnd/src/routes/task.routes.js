import { Router } from "express";
import {taskControllers} from '../controllers/task.controllers'


const router = Router();

router.get('/', taskControllers)

export default router;