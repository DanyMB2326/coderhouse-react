# 🧙‍♂️ Mickey's Magic Brew - E-commerce SPA

Aplicación web desarrollada con **React + Vite** que simula un **e-commerce funcional** con navegación SPA, catálogo de productos, detalle de producto, carrito con estado global y proceso de checkout.

---

## 🚀 Funcionalidades principales

### 📦 Catálogo de productos
- Catálogo dinámico de productos.
- Componentes involucrados:
  - `ItemListContainer`
  - `ItemList`
  - `Item`

### 🔎 Vista de detalle del producto
Permite ver información detallada de cada producto.

Componentes:
- `ItemDetailContainer`
- `ItemDetail`

### 🔢 Selector de cantidad
Selección de cantidad con validación de stock.

Componente:
- `ItemCount`

### 🛒 Carrito de compras
Manejo de carrito global mediante **Context API**.

Componente principal:
- `CartContext`

### 🧭 Navegación SPA
Implementada con **React Router**.

Rutas disponibles:

```
/
 /category/:categoryId
 /item/:itemId
 /cart
 /checkout
```

### 🧾 Checkout
- Formulario de compra.
- Generación de orden.

### ⏳ Manejo de estados de interfaz
- Loader
- Carrito vacío
- Sin stock
- Manejo de errores

### ☁️ Integración con Firebase
- Consumo de datos desde **Firebase Firestore mediante REST API**.
- Fallback automático a **datos mock locales** si no existen variables de entorno.

---

## 🧰 Tecnologías utilizadas

- React
- Vite
- React Router
- React Bootstrap
- Bootstrap
- Context API
- Firebase Firestore REST API

---

## ⚙️ Configuración del proyecto

### 1️⃣ Instalar dependencias

```bash
npm install
```

### 2️⃣ Crear archivo `.env`

Basado en `.env.example`:

```bash
cp .env.example .env
```

### 3️⃣ Configurar credenciales de Firebase

Completar en el archivo `.env`:

```env
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
```

⚠️ Si estas variables no se configuran, la aplicación utilizará **datos mock locales** para facilitar pruebas.

---

## 📜 Scripts disponibles

```bash
npm run dev      # Ejecuta la aplicación en modo desarrollo
npm run build    # Genera el build de producción
npm run preview  # Previsualiza el build
npm run lint     # Ejecuta ESLint
```

---

## 🧩 Estructura de componentes

```
NavBar
 └── CartWidget

ItemListContainer
 └── ItemList
      └── Item

ItemDetailContainer
 └── ItemDetail
      └── ItemCount

Cart
 └── CartItem

Checkout
 └── CheckoutForm
```

---

## 📌 Características del proyecto

✔ Arquitectura basada en **componentes reutilizables**  
✔ Manejo de **estado global con Context API**  
✔ Navegación **Single Page Application (SPA)**  
✔ Integración con **Firebase Firestore**  
✔ Manejo de **estados de carga y errores**

---

## 👩‍💻 Autor

Proyecto desarrollado como parte de la formación en **React**.
