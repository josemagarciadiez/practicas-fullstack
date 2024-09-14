# Practicas Web Fullstack

¡Bienvenido al repositorio de prácticas de la carrera Desarrollador Web Fullstack dictada por el CEPIT!
Este repositorio contiene múltiples proyectos para practicar los conceptos dados en clase.

## Tabla de Contenidos

- [Comenzando](#comenzando)
- [Crear un Nuevo Proyecto TypeScript](#crear-un-nuevo-proyecto-typescript)
- [Scripts](#scripts)
- [Contribuyendo](#contribuyendo)
- [Licencia](#licencia)

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

## Crear un Nuevo Proyecto TypeScript

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

3. **Instalar TypeScript**: Añade TypeScript y las dependencias necesarias:

   ```bash
   npm install --save-dev typescript @types/node
   ```

4. **Crear tsconfig.json**: Crea un archivo `tsconfig.json` con la siguiente configuración básica:

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

5. **Configurar la Estructura del Proyecto**: Crea una estructura básica para el proyecto:

   ```bash
   mkdir src
   echo "console.log('Hola, Mundo!');" > src/index.ts
   ```

6. **Agregar Scripts**: Actualiza el `package.json` con scripts útiles:

   ```json
   {
     "scripts": {
       "build": "tsc",
       "start": "node dist/index.js"
     }
   }
   ```

7. **Compilar y Ejecutar**: Compila el código TypeScript y ejecuta el proyecto:
   ```bash
   npm run build
   npm start
   ```

¡Felicidades! Has creado con éxito un nuevo proyecto TypeScript dentro del monorepositorio.

## Instalar Nodemon

`nodemon` es una herramienta que ayuda a desarrollar aplicaciones Node.js al reiniciarlas automáticamente cuando se detectan cambios en los archivos. Para instalar y usar `nodemon` en tu proyecto, sigue estos pasos:

1. **Instalar Nodemon**: Añádelo como una dependencia de desarrollo:

   ```bash
   npm install --save-dev nodemon
   ```

2. **Actualizar Scripts en package.json**: Modifica el `package.json` para agregar un script que use `nodemon`:

   ```json
   {
     "scripts": {
       "build": "tsc",
       "start": "node dist/index.js",
       "dev": "nodemon --watch 'src/**/*.ts' --exec 'ts-node' src/index.ts"
     }
   }
   ```

   - El script `"dev"` utiliza `nodemon` para observar los cambios en los archivos TypeScript dentro de la carpeta `src` y ejecutar el archivo `src/index.ts` usando `ts-node`.

3. **Ejecutar el Proyecto en Modo Desarrollo**: Ahora puedes ejecutar el proyecto en modo desarrollo con:

   ```bash
   npm run dev
   ```

   Esto iniciará `nodemon`, que compilará y ejecutará automáticamente tu aplicación cada vez que realices cambios en el código.

## Scripts

Aquí hay algunos scripts comunes que puedes usar en la raíz del monorepositorio:

- **Instalar Dependencias**: Instala todas las dependencias para los proyectos.

  ```bash
  npm install
  ```

- **Compilar Todos los Proyectos**: Compila todos los proyectos TypeScript en el repositorio.

  ```bash
  npm run build
  ```

- **Limpiar**: Elimina todas las carpetas `dist` en los proyectos.
  ```bash
  npm run clean
  ```

<!-- ## Contribuyendo

¡Damos la bienvenida a las contribuciones! Por favor, sigue estos pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu funcionalidad o corrección de errores.
3. Haz commit de tus cambios con mensajes claros.
4. Empuja tu rama y crea un pull request.

Por favor, asegúrate de que todas las pruebas pasen y tu código siga los estándares de codificación del proyecto antes de enviar un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo [LICENSE](LICENSE) para más detalles. -->
