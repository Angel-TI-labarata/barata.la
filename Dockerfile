# --- Etapa 1: construir la app Vue ---
FROM node:22-alpine AS build

WORKDIR /app

# Copiamos solo los manifiestos primero para aprovechar la cache de Docker:
# si no cambian, no se reinstalan las dependencias.
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run test
RUN npm run build

# --- Etapa 2: servir los archivos estáticos con nginx ---
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
