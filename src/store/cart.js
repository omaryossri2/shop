import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    appName: 'Cart',
    products: [],
    cart: [],
    isCartVisible: false
  },
  mutations: {
    setProducts(state, products) {
      state.products = products
    },
    addToCart(state, product) {
      const itemInCart = state.cart.find((item) => item.id === product.id)
      if (itemInCart) {
        itemInCart.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId)
    },
    incrementItem(state, productId) {
      const itemInCart = state.cart.find((item) => item.id === productId)
      if (itemInCart) {
        itemInCart.quantity++
      }
    },
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
    clearCart(state) {
      state.cart = []
    },
    toggleCartVisibility(state) {
      // Renamed for clarity
      state.isCartVisible = !state.isCartVisible
    }
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get('https://fakestoreapi.com/products')
        commit('setProducts', response.data)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    },
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId)
    },
    incrementItem({ commit }, productId) {
      commit('incrementItem', productId)
    },
    decrementItem({ commit }, productId) {
      commit('decrementItem', productId)
    },
    clearCart({ commit }) {
      commit('clearCart')
    },
    toggleCartVisibility({ commit }) {
      // Renamed for clarity
      commit('toggleCartVisibility')
    }
  },
  getters: {
    appName(state) {
      return state.appName
    },
    isCartVisible(state) {
      // Updated getter name
      return state.isCartVisible
    },
    products(state) {
      return state.products
    },
    cartItems(state) {
      return state.cart
    },
    cartItemCount(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0)
    },
    cartTotalPrice(state) {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    }
  }
})

export default store
