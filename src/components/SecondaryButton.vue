<template>
  <button
    class="secondary-button"
    @click="handleClick">
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Props 정의
const props = defineProps({
  label: String
})

// 이벤트 정의
const emit = defineEmits(['click'])

// 클릭 이벤트 핸들러
const handleClick = event => {
  emit('click', event)
}
</script>

<style scoped>
.secondary-button {
  background-color: transparent;
  color: #ff8c00;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 16px;
  box-shadow: none;
  border: 1px solid #ff8c00;
  align-self: flex-start;
  cursor: pointer;
}

.secondary-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.secondary-button:active {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
