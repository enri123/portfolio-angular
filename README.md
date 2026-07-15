# 🚀 Portfolio Angular

Un portafolio profesional moderno construido con **Angular 20**, diseñado para mostrar proyectos, habilidades y experiencia de forma interactiva y responsiva.

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
| **RxJS** | 7.8.0 | Programación reactiva |
| **ngx-translate** | 16.0.4 | Internacionalización |
| **EmailJS** | 4.4.1 | Servicio de correos |
| **SCSS** | - | Estilos avanzados |

### Composición del Proyecto
- **HTML**: 44.5%
- **TypeScript**: 28.7%
- **CSS/SCSS**: 18.7%
- **Otros**: 8.1%

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

---

## 🎯 Características Futuras

- [ ] Animaciones mejoradas
- [ ] Modo oscuro
- [ ] Blog o sección de artículos
- [ ] Carrito de proyectos descargables
- [ ] Integración con GitHub API
- [ ] Testimonios y reseñas

---

## 📜 Licencia

Este proyecto está disponible bajo la licencia **MIT**. Siéntete libre de usar, modificar y distribuir este código.

---

## 👨‍💻 Autor

**Enri123** - [@enri123](https://github.com/enri123)

---

## 🙌 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes sugerencias o encuentras bugs:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Soporte

Si tienes preguntas o necesitas ayuda, puedes:
- Abrir un [Issue](https://github.com/enri123/portfolio-angular/issues)
- Enviar un mensaje a través del formulario de contacto en el portafolio
- Contactar directamente en GitHub

---

**⭐ Si este proyecto te fue útil, considera dejar una estrella!**
