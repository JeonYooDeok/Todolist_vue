<template>
  <div
    :class="['switch-wrapper', { active: done }]"
    @click="handleClick">
    <span class="incomplete">미완료</span>
    <div class="indicator-bg">
      <div class="indicator"></div>
    </div>
    <span class="complete">완료</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

// Props 정의
const props = defineProps({
  done: Boolean // 완료 상태
})

// Emits 정의
const emit = defineEmits(['change-done'])

// 클릭 시 완료 상태 변경 이벤트 발생
const handleClick = event => {
  event.stopPropagation() // 이벤트 버블링 방지
  emit('change-done')
}
</script>

<style scoped>
.switch-wrapper {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 8px;
  transition: background-color 0.3s;
}

.switch-wrapper:hover {
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

.switch-wrapper.active .indicator-bg {
  justify-content: flex-end;
}

.switch-wrapper.active .indicator {
  background-color: #00ffc2;
}

.switch-wrapper.active .incomplete {
  color: rgba(255, 255, 255, 0.4);
}

.switch-wrapper.active .complete {
  color: #00ffc2;
}

.incomplete {
  color: white;
  white-space: nowrap;
}

.complete {
  color: rgba(255, 255, 255, 0.4);
  white-space: nowrap;
}

.indicator-bg {
  display: flex;
  width: 32px;
  height: 16px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2px;
  box-sizing: border-box;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
