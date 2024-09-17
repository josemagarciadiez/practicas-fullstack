# Practicas Web Fullstack

¡Bienvenido al repositorio de prácticas de la carrera Desarrollador Web Fullstack dictada por el CEPIT!
Este repositorio contiene múltiples proyectos para practicar los conceptos dados en clase.

## Tabla de Contenidos

- [Comenzando](#comenzando)
- [Crear un nuevo proyecto de TypeScript](#crear-un-nuevo-proyecto-de-typescript)

## Comenzando

Antes de crear o trabajar en los proyectos dentro de este monorepositorio, asegúrate de tener las siguientes herramientas instaladas en tu sistema:

- [Node.js](https://nodejs.org/en/download/) (versión 14.x o superior)
- [npm](https://www.npmjs.com/get-npm) (versión 10.x o superior)
- [Git](https://git-scm.com/)

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/josemagarciadiez/practicas-fullstack.git
   cd practicas-fullstack
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

## Crear un nuevo proyecto de TypeScript

Para crear un nuevo proyecto TypeScript dentro de la carpeta `projects`, sigue estos pasos:

1. **Crear un Nuevo Directorio**: Dentro de la carpeta `projects`, crea un nuevo directorio para tu proyecto:

   ```bash
   mkdir projects/mi-nuevo-proyecto
   cd projects/mi-nuevo-proyecto
   ```

2. **Inicializar el Proyecto**: Usa npm para inicializar un nuevo proyecto TypeScript:

   ```bash
   npm init -y
   ```

3. **Instalar TypeScript**: Añade TypeScript y las dependencias necesarias, incluido ts-node-dev:

   ```bash
   npm install --save-dev typescript @types/node ts-node-dev
   ```

4. **Agregar Scripts**: Actualiza el `package.json` con scripts útiles:

   ```json
   {
     "scripts": {
       "tsc": "tsc",
       "build": "node build/index.js",
       "dev": "ts-node-dev src/index.ts",
       "tnode": "ts-node-dev"
     }
   }
   ```
5. **Configurar la Estructura del Proyecto**: Crea una estructura básica para el proyecto:

   ```bash
   mkdir src
   touch src/index.ts
   ```

6. **Crear tsconfig.json**: Crea un archivo `tsconfig.json`:

   ```bash
   touch tsconfig.json
   ```

7. **Configura tsconfig.json**: Agrega la siguiente configuración básica al archivo `tsconfig.json`:
   ```json
   {
   "compilerOptions": {
      "target": "ES6",
      "module": "commonjs",
      "outDir": "./dist",
      "rootDir": "./src",
      "strict": true,
      "esModuleInterop": true
   },
   "include": ["src/**/*.ts"],
   "exclude": ["node_modules"]
   }
   ```


8. **Compilar y Ejecutar**: Compila el código TypeScript y ejecuta el proyecto:
   ```bash
   npm run dev
   ```

¡Felicidades! Has creado con éxito un nuevo proyecto TypeScript dentro del monorepositorio.

<!-- ## Contribuyendo

¡Damos la bienvenida a las contribuciones! Por favor, sigue estos pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección de errores.
3. Haz commit de tus cambios con mensajes claros.
4. Empuja tu rama y crea un pull request.

Por favor, asegúrate de que todas las pruebas pasen y tu código siga los estándares de codificación del proyecto antes de enviar un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles. -->
