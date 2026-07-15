# ================================
# Paso 1: Build de Angular
# ================================

#Imagen base, esta solo util para construir Angular, AS builder es un alias, para abajo en el COPY usarla como carpeta temporal
FROM node:24-alpine AS builder

#Creamos directorio /app y accedemos a ella
WORKDIR /app

#copiamos package.json y package-lock.json en el directorio app, al copiar primero las dependencias, la proxima vez que ejecutemos el dockerfile, si las dependencias no han cambiado no las volvera a instalar
COPY package*.json ./

#La primera vez instala las dependencias, y si la proxima vez que se ejecute el dockerfile no han cambiado, no se volverá a ejecutar
RUN npm ci

#Copiamos el resto del proyecto
COPY .  .

#Hacemos el build de angular
RUN npm run build -- --configuration docker

# ================================
# Paso 2: Imagen final
# ================================

#Empezamos con otra imagen base
FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

#Copiamos el build generado en el anterior paso, en la nueva ruta, asi descartamos todo lo que no necesitamos del paso anterior, con esto hacemos que la imagen final ocupe entre 10 y 20 veces menos
COPY --from=builder /app/dist/portfolio-angular/browser/ /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/conf.d/default.conf

#Escuchamos el puerto 80
EXPOSE 80

#Ejecutamos en nginx
CMD ["nginx", "-g", "daemon off;"]