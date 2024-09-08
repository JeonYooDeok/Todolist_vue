<template>
    <div class="input-wrapper">
      <label class="input-label">{{ label }}</label>
      <input
        :type="type"
        :name="name"
        :value="modelValue" <!-- 모델 값을 직접 바인딩 -->
        :placeholder="placeholder"
        @input="handleInput" <!-- 입력 이벤트 핸들러 설정 -->
        class="input-field" />
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue'
  
  // Props 정의
  const props = defineProps({
    label: String,
    type: String,
    name: String,
    modelValue: String,  // v-model에 사용될 prop
    placeholder: String
  })
  
  // Emits 정의
  const emit = defineEmits(['update:modelValue'])
  
  // input 이벤트 핸들러
  const handleInput = (event) => {
    emit('update:modelValue', event.target.value)  // 업데이트 이벤트 발행
  }
  </script>
  
  <style scoped>
  .input-wrapper {
    display: flex;
    flex-direction: column;
  }
  
  .input-label {
    font-size: 18px;
    margin-bottom: 8px;
  }
  
  .input-field {
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
  