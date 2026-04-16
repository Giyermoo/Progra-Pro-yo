# FitMatch — Plataforma de Matching Deportivo

Aplicación web para conectar personas que buscan compañeros de deporte o gimnasio. Similar a Tinder, pero para encontrar compañeros deportivos según deporte, nivel y disponibilidad horaria.

**Curso:** Programación Profesional — TICS420-1-2026  
**Grupo:** S217-P16  
**Stack:** React + TypeScript + Vite + Bun  

---

## Requisitos previos

- [Bun](https://bun.sh) instalado
- [Node.js](https://nodejs.org) instalado
- Cuenta de Google para el login SSO

---

## Instalación y ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/uai-cl-tics420/S217-P16-ProyectoPrograPro
cd S217-P16-ProyectoPrograPro

# Instalar dependencias
bun install

# Ejecutar en modo desarrollo
bun run dev
```

La aplicación estará disponible en `http://localhost:5173`

---

## Estructura del proyecto

```
src/
├── features/
│   ├── auth/
│   │   ├── AuthContext.tsx       # Contexto global de autenticación
│   │   ├── LoginForm.tsx         # Pantalla de login con Google SSO
│   │   └── RegisterForm.tsx      # Formulario de registro de usuario
│   ├── profile/
│   │   └── components/
│   │       └── ProfileForm.tsx   # Formulario de perfil deportivo
│   ├── matches/                  # (próximo sprint)
│   ├── chat/                     # (próximo sprint)
│   ├── events/                   # (próximo sprint)
│   └── admin/                    # (próximo sprint)
├── App.tsx                       # Rutas principales
└── main.tsx                      # Entrada de la aplicación
```

---

## Sprint 1 — Avance completado

### Épica 01 — Infraestructura técnica
Se inicializó el proyecto con Bun + Vite + React + TypeScript. Se configuró la estructura de carpetas por features, se instalaron las dependencias base y se subió el proyecto inicial a GitHub con integración a GitHub Projects para el seguimiento del backlog.

### Épica 02 — Autenticación y gestión de usuarios

**Registro de usuario (HU-04)**  
Se creó el componente `RegisterForm.tsx` con campos de email y contraseña, validación básica en el frontend (formato de email y largo mínimo de contraseña) y feedback visual de errores con estado temporal en React.

**Login de usuario (HU-05)**  
Se implementó autenticación real con Google SSO usando la librería `@react-oauth/google`. Al hacer login exitoso, se obtienen los datos del usuario (nombre, email, foto) desde la API de Google y se almacenan en el contexto global de la aplicación. El usuario es redirigido automáticamente a `/profile` tras autenticarse.

**Persistencia de sesión (HU-06)**  
Se creó `AuthContext.tsx` que maneja el estado global del usuario autenticado. La sesión se persiste en `localStorage`, por lo que al recargar la página el usuario permanece logueado. Se implementó un hook `useAuth` para acceder al contexto desde cualquier componente, y rutas privadas que redirigen a `/login` si el usuario no está autenticado.

### Formulario de perfil deportivo (HU-03)
Se creó `ProfileForm.tsx` con campos para nombre, deporte principal, nivel (principiante/intermedio/avanzado), disponibilidad horaria por día y franja (AM/PM) y descripción personal. El formulario incluye selección múltiple de horarios con feedback visual.

---

## Próximos sprints

- Sistema de matching entre usuarios (tipo swipe)
- Chat entre usuarios con match
- Creación y unión a eventos deportivos
- Panel de administración
- Multilenguaje (español/inglés)
- Deploy en la nube
