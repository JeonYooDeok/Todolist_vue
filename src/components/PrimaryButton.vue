<template>
  <button
    class="primary-button"
    @click="handleClick">
    {{ label }}
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Props 정의
const props = defineProps({
  label: String // 버튼의 레이블
})

// Emits 정의
const emit = defineEmits(['click'])

// 버튼 클릭 시 이벤트 처리
const handleClick = event => {
  emit('click', event)
}
</script>

<style scoped>
.primary-button {
  background-color: #ff8c00;
  color: #2e1900;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 16px;
  box-shadow: none;
  border: none;
  align-self: flex-start;
  cursor: pointer;
  transition: background-color 0.3s;
}

.primary-button:hover {
  background-color: #ffa332;
}

.primary-button:active {
  background-color: #c06a00;
}
</style>
