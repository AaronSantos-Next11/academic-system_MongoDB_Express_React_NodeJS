import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import {
    getAllCareers,
    createCareer,
    getCareerById,
    updateCareer,
    deleteCareer
} from '../controllers/career.controller.js';

const router = Router();

// Rutas para carreras, en donde todas requieren autenticación

router.get('/careers', authRequired, getAllCareers); // Obtiene todas las carreras

router.get('/careers/:id', authRequired, getCareerById); // Obtiene carrera por ID

router.post('/careers/createCareer', authRequired, createCareer); // Crea carrera

router.put('/careers/updateCareer/:id', authRequired, updateCareer); // Actualiza carrera

router.delete('/careers/deleteCareer/:id', authRequired, deleteCareer); // Elimina carreras

export default router;