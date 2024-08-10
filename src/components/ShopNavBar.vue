<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import ShopImage from '@/assets/cartImg.png'

const store = useStore()

const itemsCounter = computed(() => store.getters.cartItemCount)

const toggleCart = () => {
  store.dispatch('toggleCartVisibility')
}
</script>

<template>
  <div class="navbar">
    <div class="left-section">
      <h1 class="shop-title">S H O P</h1>
    </div>
    <div class="right-section" @click="toggleCart">
      <div class="cart-counter">
        <span>{{ itemsCounter }}</span>
      </div>
      <img :src="ShopImage" alt="Shopping Cart" class="cart-image" />
    </div>
  </div>
</template>

<style scoped>
.navbar {
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.25rem;
  background-color: white;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
}

.left-section {
  flex: 1;
  margin: 0.5rem;
}

.shop-title {
  margin: 0;
  font-size: 1.5rem;
}

.right-section {
  display: flex;
  align-items: center;
  position: relative;
  margin: 0.5rem;
  transition: background-color 0.3s;
  border-radius: 20%;
  padding: 0.3rem;
}

.right-section:hover {
  background-color: rgb(176, 176, 176);
}

.cart-counter {
  position: absolute;
  top: -0.9375rem;
  right: 0;
  padding: 0.125rem 0.375rem;
  font-weight: bold;
}

.cart-image {
  width: 2.5rem;
  height: auto;
}
</style>
