![](https://github.com/No-Country-simulation/c20-33-n-php-react/blob/main/logo_vitrina_azul.png)

Vitrina es una plataforma en línea que conecta a artesanos con compradores  ofreciendo un espacio único para descubrir y adquirir productos artesanales de alta calidad. 
Esta plataforma permite a los artesanos crear y gestionar sus tiendas virtuales, y a los compradores buscar, comparar y adquirir productos únicos. Nuestro objetivo es promover el 
comercio justo y apoyar a los artesanos locales

## Funcionalidades 

- Registro y autenticación: Permitir a los usuarios registrarse y crear una cuenta.

- Creación de tiendas: Los artesanos podrán crear sus tiendas virtuales y añadir productos.

- Catálogo de productos: Mostrar los productos de todos los artesanos en una interfaz fácil de navegar.

- Ficha de producto: Detalle de cada producto con imagen, descripción, precio y opciones de compra.

- Carrito de compras: Permite a los usuarios agregar productos a un carrito y realizar el pago.

- Pasarela de pago básica: Integra una pasarela de pago simple para procesar transacciones.

- Perfil de usuario: Permite a los usuarios ver su historial de compras y gestionar sus datos personales.

- Búsqueda básica: Permite a los usuarios buscar productos por palabras clave.

- Categorías: Organiza los productos en categorías principales (ej: joyería, cerámica, textiles).

## Tecnologías 🛠️

- **Cliente:** React, TailwindCSS

- **Servidor:** Php, Laravel

- **Base de Datos:** MySql

## Comenzando - Estructura del proyecto 🚀

El proyecto está organizado utilizando módulos de ES, con scripts para desarrollo, construcción, y análisis de código. 
A continuación se presentan los detalles de las dependencias y scripts incluidos.

## Pre-requisitos instalación 📋

Clona el repositorio.
 ```
git clone -b main https://github.com/No-Country-simulation/c20-33-n-php-react
 ```

Instalar laragon

  https://laragon.org/download/


Instalar PHP 8.2

 https://windows.php.net/download#php-8.2

Crear base de datos Mysql con nombre marketplace

 ```
 create database marketplace;
```

Dependencias

- **`prop-types`**: ^15.8.1
- **`react`**: ^18.3.1
- **`react-dom`**: ^18.3.1
- **`react-router-dom`**: ^6.26.1

Dependencias de Desarrollo

- **`@eslint/js`**: ^9.9.0
- **`@types/react`**: ^18.3.3
- **`@types/react-dom`**: ^18.3.0
- **`@vitejs/plugin-react`**: ^4.3.1
- **`autoprefixer`**: ^10.4.20
- **`eslint`**: ^9.9.0
- **`eslint-plugin-react`**: ^7.35.0
- **`eslint-plugin-react-hooks`**: ^5.1.0-rc.0
- **`eslint-plugin-react-refresh`**: ^0.4.9
- **`globals`**: ^15.9.0
- **`postcss`**: ^8.4.41
- **`tailwindcss`**: ^3.4.10
- **`vite`**: ^5.4.1

Scripts

- **`dev`**: Inicia el servidor de desarrollo con Vite.
- **`build`**: Construye el proyecto para producción utilizando Vite.
- **`lint`**: Analiza el código utilizando ESLint para mantener la calidad.
- **`preview`**: Previsualiza la versión construida del proyecto.



## Instalación 🔧

Back end

1. Instalar dependencias:
 ```
composer install 
```
2. Migrar el esquema de la base de datos y poblarla:

 ```
php artisan migrate:refresh --seed 
 ```
3. Limpiar el caché:

 ```
php artisan optimize:clear 
 ```
4. Iniciar el servidor:

 ```
php artisan serve 
 ```

Front end

1. Para instalar las dependencias ejecuta:
 ```
npm install
```
2. Para iniciar el servidor de desarrollo ejecuta:

 ```
npm run dev
 ```
3. Compila el código CSS usando Tailwindcss:

 ```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
 ```

## Despliegue 📦
_Puedes hacer el despliegue de acuerdo a tus preferencias_


## Ejecutando las pruebas ⚙️

Para correr el test, ejecuta el siguiente comando

```bash
  npm run test
```
## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/No-Country-simulation/c20-33-n-php-react/wiki)

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit de tus cambios (`git commit -m 'Agrega nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Autores ✒️

UX/UI
- [Naomi Leiva]()
- [Sofi Avila]()
  
Front end
- [Diego Cabre ]()
- [Julio Maquera]()

Back end
- [Riardo Nahuel]()
- [Edinson Gualle]()

Project Manager
- [Jose Paternina](https://www.linkedin.com/in/josepaterninaorozco/)

Team Leader
- [Esteban Gonzalez]()

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles

## Agradecimientos 🎁

 - Nuestros más sinceros agradecimientos a [No country](https://www.nocountry.tech/) por la oportunidad de hacer parte de este viaje!
