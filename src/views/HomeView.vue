<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import ShopNavBar from '@/components/ShopNavBar.vue'
import ShopItem from '@/components/ShopItem.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'

const store = useStore()

onMounted(() => {
  store.dispatch('fetchProducts')
})

const products = computed(() => store.getters.products)
const isCartVisible = computed(() => store.getters.isCartVisible)
</script>

<template>
  <ShopNavBar />
  <ShoppingCart v-if="isCartVisible" />
  <div class="shop-items-container">
    <ShopItem
      v-for="product in products"
      :key="product.id"
      :image="product.image"
      :price="product.price"
      :productName="product.title"
    />
  </div>
</template>

<style scoped>
.shop-items-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
}

.shop-items-container > * {
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .shop-items-container {
    flex-direction: column;
  }
  .shop-items-container > * {
    width: calc(100%);
  }
}

@media (min-width: 601px) {
  .shop-items-container > * {
    width: calc(25% - 1rem);
  }
}
</style>
