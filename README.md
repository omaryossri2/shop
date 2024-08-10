# Shop

This is a simple e-commerce web application built with Vue 3 and Vuex, designed to showcase a variety of products. The project demonstrates the integration of state management with Vuex, handling a shopping cart, and creating a responsive user interface.

## Features

- **Product Listing:** Display a list of products fetched from an external API.
- **Shopping Cart:** Add, remove, and update items in the shopping cart with Vuex state management.
- **Responsive Design:** The application is fully responsive, adapting to mobile and desktop layouts.
- **Dynamic Cart Visibility:** The shopping cart can be toggled open or closed from the navbar.

## Recommended IDE Setup

Use [VSCode](https://code.visualstudio.com/) along with the [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) extension for the best development experience. Make sure to disable Vetur if using Volar.

## Project Setup

1. **Install Dependencies:** Run the following command to install the required npm packages.

   ```sh
   npm install
   ```

2. **Compile and Hot-Reload for Development:** Start the development server with hot reloading enabled.

   ```sh
   npm run dev
   ```

3. **Compile and Minify for Production:** Build the project for production with minification.

   ```sh
   npm run build
   ```

4. **Linting:** Use ESLint to check and fix code style issues.
   ```sh
   npm run lint
   ```

## Folder Structure

- **src/components:** Contains all reusable Vue components like `ShopNavBar`, `ShopItem`, and `ShoppingCart`.
- **src/store:** Vuex store configuration, including state, mutations, actions, and getters.
- **src/views:** Main views of the application, such as `HomeView.vue`.

## Usage

- **Navbar:** Click the cart icon in the navbar to toggle the shopping cart's visibility.
- **Shopping Cart:** The shopping cart is dynamically updated as items are added or removed. The total price is calculated and displayed at the bottom of the cart.
- **Responsive Design:** The layout adapts to different screen sizes, with the shopping cart occupying 25% of the screen width on desktops and the entire screen height on mobile (excluding the navbar).

## Customize Configuration

For more details on configuration, see the [Vite Configuration Reference](https://vitejs.dev/config/).
