diff --git a/README.md b/README.md
index 18bc70ebe277fbfe6e55e6f9a0ae7e2c3e4bdd83..d5f444b979fcd1d0f879227e17908739ba0d81c2 100644
--- a/README.md
+++ b/README.md
@@ -1,16 +1,75 @@
-# React + Vite
+# Mickey's Magic Brew - E-commerce SPA
 
+## Funcionalidades principales
 
-- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
-- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
+- Catálogo dinámico de productos (`ItemListContainer`, `ItemList`, `Item`).
+- Vista de detalle por producto (`ItemDetailContainer`, `ItemDetail`).
+- Selector de cantidad con validaciones de stock (`ItemCount`).
+- Carrito global mediante `Context` (`CartContext`).
+- Rutas SPA con `React Router`:
+  - `/`
+  - `/category/:categoryId`
+  - `/item/:itemId`
+  - `/cart`
+  - `/checkout`
+- Checkout y generación de orden.
+- Mensajes condicionales: loader, carrito vacío, sin stock, errores.
+- Integración con Firebase Firestore vía API REST (con fallback a mock local si faltan variables de entorno).
 
-## React Compiler
+## Tecnologías
 
-The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).
+- React
+- React Router
+- React Bootstrap + Bootstrap
+- Context API
+- Firebase Firestore REST API
 
-## Expanding the ESLint configuration
+## Configuración
+
+1. Instalar dependencias:
+
+```bash
+npm install
+```
+
+2. Crear archivo `.env` basado en `.env.example`:
+
+```bash
+cp .env.example .env
+```
+
+3. Completar credenciales de Firebase:
+
+```env
+VITE_FIREBASE_API_KEY=...
+VITE_FIREBASE_PROJECT_ID=...
+```
+
+> Si no se configuran estas variables, la app utiliza datos mock locales para facilitar pruebas.
+
+## Scripts
+
+```bash
+npm run dev
+npm run build
+npm run lint
+npm run preview
+```
+
+## Estructura de componentes
+
+- `NavBar`
+  - `CartWidget`
+- `ItemListContainer`
+  - `ItemList`
+    - `Item`
+- `ItemDetailContainer`
+  - `ItemDetail`
+    - `ItemCount`
+- `Cart`
+  - `CartItem`
+- `Checkout`
+  - `CheckoutForm`
 
