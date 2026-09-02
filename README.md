# barata.la

Aplicación web "Hola mundo" hecha con **Vue 3 + Vite**, desplegada en **Coolify**
(panel en `cool.barata.la`) desde este repositorio de GitHub.

No usa base de datos: es una SPA estática servida por nginx dentro de un contenedor.

## Comandos

```bash
npm install       # instalar dependencias
npm run dev       # servidor de desarrollo (http://localhost:5173)
npm test          # ejecutar los tests una vez
npm run test:watch # tests en modo vigilancia
npm run build     # compilar a dist/
```

## Estructura

| Archivo | Para qué sirve |
| --- | --- |
| `src/App.vue` | Componente raíz de la aplicación |
| `src/components/HolaMundo.vue` | El "Hola mundo" con un contador |
| `tests/HolaMundo.spec.js` | Tests del componente (Vitest + Vue Test Utils) |
| `vite.config.js` | Configuración de Vite y de Vitest |
| `Dockerfile` | Build en 2 etapas: compila con Node, sirve con nginx |
| `nginx.conf` | Config de nginx para SPA (`try_files` a `index.html`) |
| `.github/workflows/ci.yml` | GitHub Actions: instala, testea y compila en cada push/PR |

## Despliegue

1. GitHub Actions ejecuta los tests en cada push a `main`.
2. Coolify recibe el webhook de GitHub, clona el repo y construye el `Dockerfile`.
3. El contenedor queda publicado en `barata.la` con HTTPS automático.
