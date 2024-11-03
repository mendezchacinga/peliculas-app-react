# Buscador de Películas

## Descripción
Este proyecto es un buscador de películas interactivo desarrollado con React. Permite a los usuarios buscar películas, ver detalles sobre ellas y disfrutar de una interfaz responsive con modo oscuro/claro.

## Desarrollador
- **Nombre:** Gustavo Mendez
- **Cédula:** 30860474
- **Profesor:** Yerson González
- **Materia:** Actividad 4.2 Front End I

## Características
- Búsqueda de películas en tiempo real
- Visualización de películas populares
- Página de detalles para cada película
- Modo oscuro/claro
- Diseño responsive
- Integración con la API de The Movie Database (TMDb)

## Tecnologías Utilizadas
- React
- React Router
- CSS Modules
- Vite

## Configuración del Proyecto


### Instalación
1. Clona el repositorio:
   ```
   git clone [https://github.com/mendezchacinga/peliculas-app-react.git]
   ```
2. Navega al directorio del proyecto:
   ```
   cd buscador-de-peliculas
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

### Ejecución
Para iniciar el servidor de desarrollo:
```
npm run dev
```
Luego, abre tu navegador y visita `http://localhost:5173`.

## Estructura del Proyecto
```
src/
├── assets/
├── componentes/
│   ├── Posters.jsx
│   └── Posters.module.css
├── paginas/
│   ├── Detalles.jsx
│   ├── Detalles.module.css
│   ├── Home.jsx
│   └── Home.module.css
├── App.jsx
├── App.module.css
├── configApi.js
├── index.css
└── main.jsx
```

## Uso
- La página principal muestra una lista de películas populares.
- Usa la barra de búsqueda para encontrar películas específicas.
- Haz clic en una película para ver más detalles.
- Utiliza el botón de cambio de tema para alternar entre modo claro y oscuro.

## API
Este proyecto utiliza la API de The Movie Database (TMDb).


Desarrollado con ❤️ por Gustavo Mendez