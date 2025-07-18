# Academic System API

Sistema de gestión académica desarrollado con Node.js, Express y MongoDB para la administración de carreras universitarias.

## 🚀 Características

- **Autenticación JWT**: Sistema de login/registro seguro con tokens
- **CRUD Completo**: Operaciones completas para gestión de carreras
- **Validación de Datos**: Validación robusta con Mongoose
- **Seguridad**: Autenticación requerida para todas las operaciones
- **Base de Datos**: MongoDB con Mongoose ODM

## 🛠️ Tecnologías Utilizadas

- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **MongoDB** - Base de datos NoSQL
- **Mongoose** - ODM para MongoDB
- **JWT** - Autenticación con tokens
- **bcryptjs** - Encriptación de contraseñas
- **Morgan** - Logging de HTTP requests
- **Cookie Parser** - Manejo de cookies

## 📋 Prerequisitos

- Node.js >= 14.0.0
- MongoDB (local o MongoDB Atlas)
- npm o yarn

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/AaronSantos-Next11/academic-system_MongoDB_Express_React_NodeJS.git
cd academic-system
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env en la raíz del proyecto
touch .env
```

4. **Agregar variables de entorno**
```env
# En local:
CONNECTION_STRING=mongodb://localhost:27017/academic_system

# o para MongoDB Atlas:

CONNECTION_STRING=mongodb+srv://usuario:password@cluster.mongodb.net/academic_system

PORT=3000
NODE_ENV=development
```

5. **Iniciar el servidor**
```bash
# Modo desarrollo (con watch)
npm run dev

# Modo producción
npm start
```

## 📁 Estructura del Proyecto

```
academic_system/
├── src/
│   ├── controllers/
│   │   ├── authController.js      # Controladores de autenticación
│   │   └── career.controller.js   # Controladores de carreras
│   ├── middlewares/
│   │   └── validateToken.js       # Middleware de validación JWT
│   ├── models/
│   │   ├── user.js               # Modelo de usuarios
│   │   └── careers.js            # Modelo de carreras
│   ├── routes/
│   │   ├── auth.js               # Rutas de autenticación
│   │   └── careers.routes.js     # Rutas de carreras
│   ├── connection/
│   │   └── db.js                 # Configuración de MongoDB
│   ├── libs/
│   │   └── jwt.js                # Utilidades JWT
│   ├── config.js                 # Configuración general
│   ├── app.js                    # Configuración de Express
│   └── index.js                  # Punto de entrada
├── package.json
├── .env
└── README.md
```

## 🔐 Autenticación

El sistema utiliza JWT (JSON Web Tokens) almacenados en cookies para la autenticación. Todas las rutas de carreras requieren autenticación.

### Endpoints de Autenticación

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| POST | `/api/register` | Registrar nuevo usuario |
| POST | `/api/login` | Iniciar sesión |
| POST | `/api/logout` | Cerrar sesión |
| GET | `/api/profile` | Obtener perfil del usuario |

## 📚 API Endpoints

### Carreras (Careers)

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| GET | `/api/careers` | Obtener todas las carreras | ✅ |
| GET | `/api/careers/:id` | Obtener carrera por ID | ✅ |
| POST | `/api/careers` | Crear nueva carrera | ✅ |
| PUT | `/api/careers/:id` | Actualizar carrera | ✅ |
| DELETE | `/api/careers/:id` | Eliminar carrera | ✅ |

## 📊 Modelos de Datos

### Usuario (User)
```javascript
{
  username: String,    // Requerido
  email: String,       // Requerido, único
  password: String,    // Requerido, encriptado
  createdAt: Date,     // Automático
  updatedAt: Date      // Automático
}
```

### Carrera (Career)
```javascript
{
  career_code: String,           // Código de la carrera
  career_name: String,           // Nombre de la carrera
  description: String,           // Descripción
  four_quarter_duration: Number, // Duración en cuatrimestres
  modality: String,              // Modalidad (Presencial, Virtual, Híbrida)
  creation_date: Date,           // Fecha de creación
  active: Boolean,               // Estado activo/inactivo
  coordinator: {                 // Coordinador de la carrera
    name: String,                // Nombre del coordinador
    email: String                // Email del coordinador
  },
  createdAt: Date,               // Automático
  updatedAt: Date                // Automático
}
```

## 📖 Ejemplos de Uso

### Registro de Usuario
```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "email": "admin@university.edu",
    "password": "admin123"
  }'
```

### Login
```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@university.edu",
    "password": "admin123"
  }'
```

### Crear Carrera
```bash
curl -X POST http://localhost:3000/api/careers \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "career_code": "ING001",
    "career_name": "Ingeniería de Software",
    "description": "Carrera enfocada en desarrollo de software",
    "four_quarter_duration": 16,
    "modality": "Presencial",
    "creation_date": "2024-01-15T00:00:00.000Z",
    "active": true,
    "coordinator": {
      "name": "Dr. Juan Pérez",
      "email": "juan.perez@university.edu"
    }
  }'
```

### Obtener Todas las Carreras
```bash
curl -X GET http://localhost:3000/api/careers \
  -b cookies.txt
```

## 🧪 Testing

### Con Postman
1. Importar la colección desde `/docs/postman_collection.json`
2. Configurar el entorno con `base_url: http://localhost:3000`
3. Ejecutar los requests en orden: Register → Login → CRUD Operations

### Con Thunder Client
1. Crear nuevo entorno: `Development`
2. Configurar variable: `base_url = http://localhost:3000`
3. Seguir la secuencia de testing del README

### Flujo de Testing
```
1. POST /api/register    → Crear usuario
2. POST /api/login       → Obtener token
3. GET /api/careers      → Listar carreras
4. POST /api/careers     → Crear carrera
5. GET /api/careers/:id  → Obtener carrera
6. PUT /api/careers/:id  → Actualizar carrera
7. DELETE /api/careers/:id → Eliminar carrera
8. POST /api/logout      → Cerrar sesión
```

## 🔧 Scripts Disponibles

```bash
# Desarrollo con auto-reload
npm run dev

# Iniciar servidor
npm start

# Ejecutar tests (cuando se implementen)
npm test
```

## 🔒 Seguridad

- Contraseñas hasheadas con bcryptjs (salt rounds: 10)
- JWT con expiración de 1 día
- Validación de entrada con Mongoose
- Middleware de autenticación en rutas protegidas
- Cookies HTTPOnly para almacenamiento seguro de tokens

## 📝 Variables de Entorno

```env
# Base de datos
CONNECTION_STRING=mongodb://localhost:27017/academic_system

# Servidor
PORT=3000
NODE_ENV=development

# JWT (opcional, usa valor por defecto)
JWT_SECRET=your-secret-key
```

## 🚀 Deployment

### Desarrollo Local
```bash
npm run dev
```

### Producción
```bash
npm start
```

### Con Docker (Opcional)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contribución

1. Fork el proyecto
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC - ver el archivo [LICENSE](LICENSE) para más detalles.


## 🙏 Agradecimientos

- Express.js por el framework web
- MongoDB por la base de datos
- JWT por la autenticación segura
- Mongoose por el ODM

## 📈 Roadmap

- [ ] Implementar tests unitarios
- [ ] Agregar validación de entrada más robusta
- [ ] Implementar paginación en listados
- [ ] Agregar filtros y búsqueda
- [ ] Implementar roles de usuario
- [ ] Agregar documentación con Swagger
- [ ] Implementar logging avanzado
- [ ] Agregar rate limiting
- [ ] Implementar caché con Redis

---

**Última actualización:** Julio 2025