import Career from '../models/careers.js';

//! Obtener todas las carreras
export const getAllCareers = async (req, res) => {
    try {

        // Busca todas las carreras en la base de datos
        // y las devuelve en formato JSON
        const careers = await Career.find();
        res.json(careers);

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

//! Crear una nueva carrera
export const createCareer = async (req, res) => {

    // Objeto que mapea los datos de la carrera
    const {
        career_code,
        career_name,
        description,
        four_quarter_duration,
        modality,
        creation_date,
        active,
        coordinator
    } = req.body;

    try {
        // Validación de campos requeridos
        const newCareer = new Career({
            career_code,
            career_name,
            description,
            four_quarter_duration,
            modality,
            creation_date,
            active,
            coordinator
        });

        const savedCareer = await newCareer.save(); // Guardar la carrera en la base de datos
        res.status(201).json(savedCareer);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
};

//! Obtener una carrera por ID
export const getCareerById = async (req, res) => {
    const { id } = req.params; // Extrae el ID de los parámetros de la solicitud

    try {
        const career = await Career.findById(id); // Busca la carrera por ID
        
        if (!career) { // Si no se encuentra la carrera, devuelve un error 404
            return res.status(404).json({ message: 'Career not found' });
        }
        
        res.json(career);
    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};

//! Actualizar una carrera
export const updateCareer = async (req, res) => {
    const { id } = req.params; // Extrae el ID de los parámetros de la solicitud
    const updateData = req.body; // Datos de actualización de la carrera

    try {
        // Busca la carrera por ID y actualiza sus datos usando findByIdAndUpdate
        // El parámetro { new: true } devuelve el documento actualizado
        const updatedCareer = await Career.findByIdAndUpdate(
            id, 
            updateData,
            { new: true, runValidators: true }
        );

        // Si no se encuentra la carrera, devuelve un error 404
        if (!updatedCareer) {
            return res.status(404).json({ message: 'Career not found' });
        }

        res.json(updatedCareer);
    } catch (error) {
        res.status(400).json({ message: error.message });
        console.log(error);
    }
};

//! Eliminar una carrera
export const deleteCareer = async (req, res) => {
    const { id } = req.params; // Extrae el ID de los parámetros de la solicitud

    try {

        // Busca la carrera por ID y la elimina usando findByIdAndDelete
        // Si no se encuentra la carrera, devuelve un error 404
        const deletedCareer = await Career.findByIdAndDelete(id);

        if (!deletedCareer) {
            return res.status(404).json({ message: 'Career not found' });
        }

        // Si la carrera se elimina correctamente, devuelve un mensaje de éxito
        res.json({ message: 'Career deleted successfully' });

    } catch (error) {
        res.status(500).json({ message: error.message });
        console.log(error);
    }
};