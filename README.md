# E-commerce React

Este proyecto es una tienda online básica construida con React y Firebase.

## Páginas

- **Home:** Lista de productos
- **Detalle de Producto**
- **Formulario de Registro** (solo maquetado)
- **Login** (solo maquetado)

## Tecnologías

- React (JSX)
- Firebase Firestore
- React Router

## Instalación

```bash
npm install
npm run dev
```

## Configuración

Agrega tu configuración de Firebase en `firebaseConfig.js`.

## Datos

Crea una colección `productos` en Firestore con documentos que contengan:
- `nombre`: string
- `descripcion`: string
- `precio`: number
- `imagen`: string (URL)
