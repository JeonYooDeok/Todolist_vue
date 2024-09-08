<template>
  <div class="modal-content">
    <p class="title">{{ modalTitle }}</p>
    <Input
      label="제목"
      type="text"
      name="title"
      v-model="title"
      placeholder="제목을 입력하세요" />
    <TextArea
      label="설명"
      type="text"
      name="description"
      v-model="description"
      placeholder="설명을 입력하세요" />
    <div class="button-box">
      <button @click="handleDelete">삭제</button>
      <div class="button-box-right">
        <PrimaryButton
          label="수정"
          @click="modifyTodo" />
        <SecondaryButton
          label="취소"
          @click="closeModal" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodo } from '../Hooks/useTodo'
import { useModal } from '../Hooks/useModal'
import Input from './Input.vue'
import TextArea from './TextArea.vue'
import PrimaryButton from './PrimaryButton.vue'
import SecondaryButton from './SecondaryButton.vue'

// useTodo 훅을 통해 상태 및 함수 가져오기
const { title, description, onChange, modifyTodo, deleteTodo, selectedId } =
  useTodo()
const { closeModal } = useModal()

// 제목 및 설명 업데이트 핸들러
const handleDelete = () => {
  deleteTodo(selectedId)
  closeModal()
}
</script>

<style scoped>
.modal-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 640px;
  padding: 16px;
  background-color: #023332;
  border-radius: 12px;
  box-sizing: border-box;
}

.title {
  font-size: 36px;
  font-weight: 700;
  line-height: 120%;
}

.button-box {
  display: flex;
  justify-content: space-between;
}

.button-box-right {
  display: flex;
  gap: 8px;
}
</style>
