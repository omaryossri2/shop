import { createStore } from 'vuex'
import axios from 'axios'

// Create a new Vuex store
const store = createStore({
  // Define the initial state of the store
  state: {
    appName: 'Cart',
    products: [], // List of products fetched from the API
    cart: [], // Items added to the cart
    isCartVisible: false // Visibility status of the cart
  },
  // Define mutations to modify the state
  mutations: {
    // Set the products array with data from the API
    setProducts(state, products) {
      state.products = products
    },
    // Add a product to the cart or increment its quantity
    addToCart(state, product) {
      const itemInCart = state.cart.find((item) => item.id === product.id)
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    // Remove a product from the cart by its ID
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId)
    },
    // Increment the quantity of a product in the cart
    incrementItem(state, productId) {
      const itemInCart = state.cart.find((item) => item.id === productId)
      if (itemInCart) {
        itemInCart.quantity++
      }
    },
    // Decrement the quantity of a product in the cart or remove it if quantity is 1
    decrementItem(state, productId) {
      const itemInCart = state.cart.find((item) => item.id === productId)
      if (itemInCart) {
        if (itemInCart.quantity > 1) {
          itemInCart.quantity--
        } else {
          state.cart = state.cart.filter((item) => item.id !== productId)
        }
      }
    },
    // Clear all items from the cart
    clearCart(state) {
      state.cart = []
    },
    // Toggle the visibility of the cart
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible
    }
  },
  // Define actions to perform asynchronous operations
  actions: {
    // Fetch products from the API and commit the result to the store
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        commit('setProducts', data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    // Action to add a product to the cart
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
    // Action to remove a product from the cart
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId)
    },
    // Action to increment the quantity of a product in the cart
    incrementItem({ commit }, productId) {
      commit('incrementItem', productId)
    },
    // Action to decrement the quantity of a product in the cart
    decrementItem({ commit }, productId) {
      commit('decrementItem', productId)
    },
    // Action to clear the cart
    clearCart({ commit }) {
      commit('clearCart')
    },
    // Action to toggle the cart visibility
    toggleCartVisibility({ commit }) {
      commit('toggleCartVisibility')
    }
  },
  // Define getters to access store data
  getters: {
    appName: (state) => state.appName, // Get the app name
    isCartVisible: (state) => state.isCartVisible, // Check if the cart is visible
    products: (state) => state.products, // Get the list of products
    cartItems: (state) => state.cart, // Get the items in the cart
    cartItemCount: (state) => state.cart.reduce((total, { quantity }) => total + quantity, 0), // Get the total number of items in the cart
    cartTotalPrice: (state) =>
      state.cart.reduce((total, { price, quantity }) => total + price * quantity, 0).toFixed(2) // Get the total price of the cart items
  }
})

export default store
