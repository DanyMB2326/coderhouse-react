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
- Permite ver información detallada de cada producto.
- Componentes:
  - `ItemDetailContainer`
  - `ItemDetail`

### 🔢 Selector de cantidad
- Selección de cantidad con validación de stock.
- Componente:
  - `ItemCount`

### 🛒 Carrito de compras
- Manejo de carrito global mediante **Context API**.
- Componente principal:
  - `CartContext`

### 🧭 Navegación SPA
Implementada con **React Router**.

Rutas disponibles:
/
/category/:categoryId
/item/:itemId
/cart
/checkout


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

- **React**
- **Vite**
- **React Router**
- **React Bootstrap**
- **Bootstrap**
- **Context API**
- **Firebase Firestore REST API**

---

## ⚙️ Configuración del proyecto

### 1️⃣ Instalar dependencias

```bash
npm install 
