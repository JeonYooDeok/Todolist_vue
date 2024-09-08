div
<template>
  <div class="list-wrapper">
    <div class="headline">
      <p class="title">To do list</p>
      <PrimaryButton
        label="+할 일 등록"
        @click="openModal('ModalAddTodo')"
        >+ 할 일 등록</PrimaryButton
      >
    </div>
    <div class="list">
      <Todoitem
        v-for="item in todoList"
        :key="Number(item.id)"
        :id="Number(item.id)"
        :title="item.title"
        :description="item.description"
        :done="item.done"
        :order="item.order"
        @change-done="() => toggleDone(item.id)"
        @delete-item="() => deleteTodo(item.id)" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Todoitem from './Todoitem.vue'
import { useTodo } from '../hooks/useTodo'
import { useModal } from '../hooks/useModal'
import PrimaryButton from './PrimaryButton.vue'

const { todoList, fetchTodoList, toggleDone, deleteTodo } = useTodo()
const { openModal } = useModal()

onMounted(() => {
  fetchTodoList()
})
</script>

<style scoped>
.list-wrapper {
  margin: 0 auto;
  max-width: 1200px;
}

.headline {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 64px;
  line-height: 120%;
  font-weight: 700;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
