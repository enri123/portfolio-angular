# 🚀 Portfolio Angular

Un portafolio profesional moderno construido con **Angular 20**, diseñado para mostrar proyectos, habilidades y experiencia.

**🌐 [Ver en vivo](https://enri123.github.io/portfolio-angular/)**

---

## 📋 Características

✨ **Interfaz moderna y responsiva** - Diseño adaptable a todos los dispositivos  
🌍 **Soporte multiidioma** - Internacionalización con ngx-translate  
📧 **Contacto directo** - Integración con EmailJS para enviar mensajes  
♿ **Accesible** - Cumplimiento de estándares de accesibilidad  
⚡ **Alto rendimiento** - Optimizado para velocidad y carga rápida  
🎨 **Material Design** - Componentes visuales con Angular Material  

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **Angular** | 20.3.0 | Framework principal |
| **TypeScript** | 5.9.2 | Lenguaje de programación |
| **Angular Material** | 20.2.12 | Componentes de UI |
| **ngx-translate** | 16.0.4 | Internacionalización |
| **EmailJS** | 4.4.1 | Servicio de correos |
| **SCSS** | - | Estilos avanzados |

---

## 🚀 Comenzar

### Requisitos Previos

- Node.js (v18 o superior)
- npm o yarn
- Angular CLI v20.3.7

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/enri123/portfolio-angular.git
cd portfolio-angular

# Instalar dependencias
npm install
```

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start
```

Abre tu navegador en `http://localhost:4200/`. La aplicación se recargará automáticamente al realizar cambios.

### Compilación

```bash
# Build para producción
npm run build
```

Los artefactos compilados se guardarán en el directorio `dist/`.

### Testing

```bash
# Ejecutar pruebas unitarias
npm test

# Generar reporte de cobertura
npm run test -- --code-coverage
```

---

## 📁 Estructura del Proyecto

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── components/     # Componentes reutilizables
│   │   ├── pages/          # Páginas principales
│   │   ├── services/       # Servicios
│   │   ├── models/         # Interfaces y tipos
│   │   └── app.module.ts   # Módulo principal
│   ├── assets/             # Recursos estáticos
│   ├── styles/             # Estilos globales
│   └── main.ts             # Punto de entrada
├── package.json
├── tsconfig.json
└── angular.json
```

---

## 📝 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia servidor de desarrollo en `http://localhost:4200` |
| `npm run build` | Compila el proyecto para producción |
| `npm run watch` | Modo watch para desarrollo continuo |
| `npm test` | Ejecuta pruebas unitarias |
| `npm run format` | Formatea el código con Prettier |
| `npm run format:check` | Verifica el formato sin aplicar cambios |

---

## 🌐 Despliegue

Este proyecto está configurado para desplegarse en **GitHub Pages**. Los cambios en la rama `main` se despliegan automáticamente.

**URL en vivo**: https://enri123.github.io/portfolio-angular/

Para desplegar localmente:

```bash
npm run build
# Los archivos compilados estarán en dist/portfolio-angular/
```

---

## 📧 Contacto

El formulario de contacto utiliza **EmailJS** para enviar mensajes directamente. Asegúrate de configurar tus credenciales de EmailJS en el servicio correspondiente.


## 👨‍💻 Autor

**Enri123** - [@enri123](https://github.com/enri123)


**⭐ Si este proyecto te fue útil, considera dejar una estrella!**
