# 🏰 Mickey's Magic Brew

> *"Donde cada sorbo tiene magia"* ✨

E-commerce SPA temático de Disney desarrollado con **React + Vite** y **Firebase Firestore** como base de datos en la nube.


---

## 🎯 Descripción

Mickey's Magic Brew es una tienda online temática de Disney que ofrece:

- 🧪 **Elixires** — Bebidas mágicas inspiradas en personajes Disney
- 🍰 **Pastelería Encantada** — Dulces y postres temáticos
- 🛍️ **Mercancía Mágica** — Productos coleccionables y accesorios

---

## 🚀 Tecnologías utilizadas

| Herramienta | Versión | Uso |
|---|---|---|
| React | 18 | Librería UI principal |
| React Router DOM | v6 | Navegación SPA |
| Context API | — | Estado global del carrito |
| Firebase / Firestore | v10 | Base de datos en la nube |
| Vite | v5 | Bundler y servidor de desarrollo |
| React Toastify | v10 | Notificaciones |
| CSS Custom Properties | — | Sistema de estilos temático |

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── NavBar/               # Barra de navegación + CartWidget
│   ├── CartWidget/           # Ícono del carrito con contador
│   ├── Footer/               # Footer con redes sociales
│   ├── ItemListContainer/    # Contenedor: catálogo y categorías
│   ├── ItemList/             # Lista de productos (presentacional)
│   ├── Item/                 # Tarjeta de producto (presentacional)
│   ├── ItemDetailContainer/  # Contenedor: detalle de producto
│   ├── ItemDetail/           # Vista detalle (presentacional)
│   ├── ItemCount/            # Selector de cantidad con validaciones
│   ├── Cart/                 # Vista del carrito de compras
│   ├── CartItem/             # Fila de producto en carrito con controles
│   ├── CheckoutForm/         # Formulario de compra + orden en Firestore
│   ├── Loader/               # Spinner de carga
│   └── NotFound/             # Página 404
├── context/
│   └── CartContext.jsx       # Estado global del carrito
├── firebase/
│   ├── config.js             # Inicialización de Firebase
│   └── seeder.js             # Script para poblar Firestore
├── hooks/
│   └── useFirestore.js       # Custom hooks: useProducts, useProduct
├── App.jsx                   # Rutas principales
├── main.jsx                  # Entry point
└── index.css                 # Variables CSS y estilos globales
```

---

## ⚙️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/DanyMB2326/coderhouse-react.git
cd coderhouse-react
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Creá un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

### 4. Poblar Firestore (solo la primera vez)

En `src/App.jsx` descomenta temporalmente:

```jsx
import { useEffect } from 'react';
import { seedDatabase } from './firebase/seeder';

// dentro de function App():
useEffect(() => { seedDatabase(); }, []);
```

Corre la app, espera el mensaje `✅ Se insertaron X productos exitosamente` en la consola del navegador (F12), y volvé a comentar las líneas.

### 5. Correr en desarrollo

```bash
npm run dev
```

Abrí [http://localhost:5173](http://localhost:5173) en el navegador.

---

## 🗄️ Colecciones en Firestore

### `products`

| Campo | Tipo | Descripción |
|---|---|---|
| `title` | string | Nombre del producto |
| `category` | string | `elixires`, `pasteleria` o `mercancia` |
| `price` | number | Precio en MXN |
| `stock` | number | Unidades disponibles |
| `description` | string | Descripción del producto |
| `image` | string | Ruta de la imagen (`/img/nombre.png`) |

### `orders`

| Campo | Tipo | Descripción |
|---|---|---|
| `buyer` | map | `{ name, email, phone }` |
| `items` | array | `[{ id, title, price, quantity }]` |
| `total` | number | Total de la orden en MXN |
| `date` | timestamp | Fecha de creación |
| `status` | string | Estado: `pending` |

---

## 🔗 Rutas de la aplicación

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | ItemListContainer | Página de inicio con hero banner |
| `/category/elixires` | ItemListContainer | Catálogo filtrado por categoría |
| `/category/pasteleria` | ItemListContainer | Catálogo filtrado por categoría |
| `/category/mercancia` | ItemListContainer | Catálogo filtrado por categoría |
| `/item/:id` | ItemDetailContainer | Detalle de producto |
| `/cart` | Cart | Carrito de compras |
| `/checkout` | CheckoutForm | Formulario de compra |
| `*` | NotFound | Página 404 |

---

## ✨ Funcionalidades

- **Catálogo dinámico** con carga desde Firestore y filtrado por categoría
- **Detalle de producto** con selector de cantidad y validación de stock
- **ItemCount** con mínimo 1 y máximo igual al stock disponible
- **Carrito global** con Context API — persiste durante la sesión
- **Controles de cantidad en el carrito** — aumentar/disminuir sin volver al producto
- **CartWidget** con badge animado que muestra el total de unidades
- **Checkout con validación** de formulario y verificación de stock en tiempo real
- **Generación de orden** en Firestore con `writeBatch` para descontar stock atómicamente
- **ID de orden** mostrado al usuario al finalizar la compra
- **Renderizado condicional** — loaders, "sin stock", "carrito vacío", confirmación de orden
- **Navegación SPA** sin recargas de página con React Router v6
- **Footer** con links de categorías, contacto y redes sociales
- **Diseño responsive** adaptado para mobile, tablet y desktop

---

## 🚢 Deploy

Compatible con [Netlify](https://mickeys-magic-brew.netlify.app/).

---

## 👤 Autora

**Daniela MB** — Proyecto Final Coderhouse React 2025

[![GitHub](https://img.shields.io/badge/GitHub-DanyMB2326-181717?style=flat&logo=github)](https://github.com/DanyMB2326/coderhouse-react)

---

<p align="center">
  Hecho con ✨ y mucho café mágico
</p>
