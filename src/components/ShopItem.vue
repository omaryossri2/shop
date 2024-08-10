<script setup>
import { useStore } from 'vuex'

// Define props with default values
const props = defineProps({
  image: {
    type: String,
    default:
      'https://contents.mediadecathlon.com/p2606919/k$a531927e5c71c12f4d3edac227199f78/jogflow-5001-men-s-running-shoes-white-blue-red.jpg?format=auto&quality=40&f=452x452'
  },
  price: {
    type: Number,
    default: 25
  },
  productName: {
    type: String,
    default: 'Product 1'
  }
})

const store = useStore()

const addToCart = () => {
  const product = {
    id: props.productName, 
    image: props.image,
    price: props.price,
    title: props.productName,
    quantity: 1
  }
  store.dispatch('addToCart', product)
}
</script>

<template>
  <div class="shop-item">
    <div class="price-tag">{{ props.price }}EGP</div>
    <img :src="props.image" alt="Product Image" class="product-image" />
    <div class="product-details">
      <p class="product-name">{{ props.productName }}</p>
      <button class="add-to-cart-button" @click="addToCart">ADD +</button>
    </div>
  </div>
</template>

<style scoped>
.shop-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 60vh; 
  width: 20vw; 
  border: 1px solid #ddd;
  overflow: hidden;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

.product-image {
  width: 100%;
  height: auto;
  max-width: 100%; 
  max-height: 60%; 
  object-fit: contain; 
  margin-bottom: 1rem; 
}

.product-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  padding-bottom: 1rem;
}

.product-name {
  margin: 0; 
  font-size: 1rem; 
  text-transform: uppercase;
  padding-right: 0.5rem;
}

.add-to-cart-button {
  margin: 0.25rem;
  padding: 0.5rem 1rem;
  border: 2px solid black;
  background-color: white;
  color: black;
  border-radius: 0;
  cursor: pointer;
  font-size: 1rem;
}

.add-to-cart-button:hover {
  background-color: grey;
  color: white;
}
.price-tag {
  position: static;
  top: 1rem;
  margin-left: 12rem;
  background-color: #000000;
  color: #ffffff;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  width: 6rem; 
  text-align: center;
}

@media (max-width: 600px) {
  .price-tag {
    margin-left: 14rem;
  }
  .price-tag > * {
    margin-left: 14rem; 
  }
}
</style>
