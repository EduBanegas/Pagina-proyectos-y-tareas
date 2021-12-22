import { Router } from "express";
import authRoutes from './auth.routes'
import projectRoutes from './projects.routes'
import taskRoutes from './task.routes'
import userRoutes from './user.routes'


const router = Router();

// Routes
router.use('/auth', authRoutes);

router.use('/project', projectRoutes)

router.use('/task', taskRoutes)

router.use('/user', userRoutes)


export default router;