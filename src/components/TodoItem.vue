<script setup>
// Vue 3의 <script setup> 구문을 사용하여 컴포넌트를 간단하게 정의
import { defineEmits, defineProps } from 'vue'
import Switch from './Switch.vue' // Switch 컴포넌트 불러옴

// 상위 컴포넌트에서 전달받은 props 정의
const props = defineProps({
  id: Number, // 할 일 ID
  title: String, // 할 일 제목
  description: String, // 할 일 설명
  done: Boolean, // 완료 여부
  order: Number // 할 일 순서
})

// 컴포넌트에서 발생한 이벤트를 상위 컴포넌트로 전달하기 위해 defineEmits 사용
const emit = defineEmits([
  'update-selected-id',
  'open-modal',
  'delete-item',
  'change-done'
])

// 할 일 아이템 클릭 시 호출, 선택된 아이템의 ID와 제목/설명을 모달에 전달
const handleItemClick = () => {
  emit('update-selected-id', props.id)
  emit('open-modal', {
    title: props.title,
    description: props.description
  })
}

// 삭제 버튼 클릭 시 호출, 해당 아이템을 삭제하는 이벤트 전달
const handleDeleteClick = event => {
  event.stopPropagation() // 이벤트 버블링 방지
  emit('delete-item', props.id)
}

// 완료 상태 변경 시 호출, 완료 상태를 상위로 전달
const onChangeDone = () => {
  emit('change-done', props.id)
}
</script>

<template>
  <div
    :class="['item', { active: props.done }]"
    @click="handleItemClick">
    <!-- 할 일 완료 여부에 따라 클래스 설정 -->
    <!-- 아이템 클릭 시 handleItemClick 호출 -->

    <span class="completeTitle">{{ props.title }}</span>
    <!-- 제목 표시 -->

    <div class="button-box">
      <Switch
        :done="props.done"
        @change-done="onChangeDone" />
      <!-- Switch 컴포넌트에서 완료 상태 변경 시 onChangeDone 호출 -->

      <span
        class="delete-button material-icons"
        @click.stop="handleDeleteClick">
        close
      </span>
      <!-- 삭제 버튼 클릭 시 handleDeleteClick 호출 -->
    </div>
  </div>
</template>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: white;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 16px;
  transition-duration: 0.25s;
  cursor: pointer;
}

.item:hover {
  border: 1px solid rgba(255, 255, 255, 0.5);
}

.item.active {
  background-color: rgba(255, 255, 255, 0.02);
}

.completeTitle {
  color: rgba(255, 255, 255, 1);
}

.item.active .completeTitle {
  color: rgba(255, 255, 255, 0.2);
  text-decoration: line-through;
}

.button-box {
  display: flex;
}

.delete-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  cursor: pointer;
}

.delete-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
