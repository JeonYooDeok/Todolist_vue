<template>
  <div
    v-if="isOpen"
    class="modal-container">
    <component
      :is="modalContentComponent"
      :modal-title="modalTitle" />
  </div>
</template>

<!-- <script setup>
import { computed } from 'vue'
import { useModal } from '../Hooks/useModal'
import ModalAddTodo from './ModalAddTodo.vue'
import ModalModify from './ModalModify.vue'

// useModal 훅을 통해 모달 관련 상태 및 함수 가져오기
const { isOpen, modalContent } = useModal()

// modalContent에 따라 모달 컴포넌트 선택
const modalContentComponent = computed(() => {
  switch (modalContent) {
    case 'ModalAddTodo':
      return ModalAddTodo
    case 'ModalModify':
      return ModalModify
    default:
      return null
  }
})

// 모달 제목 설정
const modalTitle = computed(() => {
  switch (modalContent) {
    case 'ModalAddTodo':
      return '할 일 등록'
    case 'ModalModify':
      return '할 일 수정'
    default:
      return ''
  }
})
</script> -->

<style scoped>
.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: auto;
  backdrop-filter: blur(12px);
  z-index: 10;
}
</style>
