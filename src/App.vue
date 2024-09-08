<template>
  <div>
    <Header />
    <router-view />
    <Modal />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Modal from './components/Modal.vue'
</script>

<style>
body {
  background-color: #023332;
  color: white;
}
</style>
