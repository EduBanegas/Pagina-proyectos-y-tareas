import express, { json } from "express"
import morgan from 'morgan'



// import routes
import indexRoutes from './routes/index.routes'


// server initialization 
const app = express();


// middlewares
app.use(json())
app.use(morgan('dev'))


// routes
app.use('/api/', indexRoutes)


export default app;