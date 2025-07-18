import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv/config';
import connectDB from './connection/db.js';
import cookieParser from 'cookie-parser';

// Importar rutas del proyecto
import authRoutes from './routes/auth.js';
import careersRoutes from './routes/careers.routes.js';

// Ejecuta la conexión a base de datos
connectDB();

// Instacia y uso de Express.js en este archivo
const app = express();

// Uso de dependencias
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

// Se parte del endpoint "/api" y luego se alternan con las rutas de carreras o auth
app.use('/api', authRoutes);
app.use('/api', careersRoutes);

export default app;