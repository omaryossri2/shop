<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const cartItems = computed(() => store.getters.cartItems)
const totalPrice = computed(() => store.getters.cartTotalPrice)

const clearCart = () => {
  store.dispatch('clearCart')
}

const incrementItem = (itemId) => {
  store.dispatch('incrementItem', itemId)
}

const decrementItem = (itemId) => {
  store.dispatch('decrementItem', itemId)
}
</script>

<template>
  <div class="cart">
    <div class="cart-header">
      <h1>ITEMS</h1>
      <button class="clear-cart-button" @click="clearCart">CLEAR</button>
    </div>

    <div class="cart-items">
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" alt="Product Image" class="product-image" />
        <div class="product-details">
          <p class="product-name">{{ item.title }}</p>
          <p class="product-price">{{ item.price }} EGP</p>
        </div>
        <div class="quantity-controls">
          <button @click="decrementItem(item.id)">-</button>
          <span>{{ item.quantity }}</span>
          <button @click="incrementItem(item.id)">+</button>
        </div>
      </div>
    </div>

    <button class="total-price-button">TOTAL: {{ totalPrice }} EGP</button>
  </div>
</template>
<style scoped>
.cart {
  position: fixed;
  top: 89px;
  right: 0;
  height: 100vh;
  background-color: white;
  z-index: 1000;
  padding: 1rem;
  font-family: Arial, sans-serif;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .cart {
    width: 92%;
    height: calc(100vh - 60px); 
    top: 89px; 
  }
}

@media (min-width: 769px) {
  .cart {
    height: calc(100vh - 60px);
    width: 25%;
  }
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

h1 {
  font-weight: bold;
  font-size: 2rem;
}

.clear-cart-button {
  background-color: transparent;
  border: 2px solid black;
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.cart-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: auto;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-image {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.product-details {
  flex-grow: 1;
  padding-left: 1rem;
}

.product-name {
  font-size: 1rem;
  margin: 0;
}

.product-price {
  font-size: 0.9rem;
  color: grey;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.quantity-controls button {
  background-color: transparent;
  border: 2px solid black;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  cursor: pointer;
}

.total-price-button {
  margin-top: 2rem;
  width: 100%;
  padding: 1rem;
  background-color: white;
  color: black;
  border: 2px solid black;
  font-size: 1.2rem;
  cursor: pointer;
}
</style>
