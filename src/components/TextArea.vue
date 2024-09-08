<template>
  <div class="textarea-wrapper">
    <label class="textarea-label">{{ label }}</label>
    <textarea
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      @input="handleInput"
      class="textarea-field">
    </textarea>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Props 정의
const props = defineProps({
  modelValue: String,
  label: String,
  name: String,
  placeholder: String
})

// Emits 정의
const emit = defineEmits(['update:modelValue'])

// input 이벤트 핸들러
const handleInput = event => {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped>
.textarea-wrapper {
  display: flex;
  flex-direction: column;
}

.textarea-label {
  font-size: 18px;
  margin-bottom: 8px;
}

.textarea-field {
  min-width: 100%;
  max-width: 100%;
  height: 160px;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-family: 'Pretendard Variable';
  box-sizing: border-box;
}
</style>
