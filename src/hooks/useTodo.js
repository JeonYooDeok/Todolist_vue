import { ref, computed } from 'vue'

export function useTodo() {
  const todoList = ref([])
  const title = ref('')
  const description = ref('')

  const fetchTodoList = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos')
      const result = await response.json()
      if (response.ok) {
        todoList.value = result
      } else {
        throw new Error('투두리스트 불러오기 실패')
      }
    } catch (error) {
      console.error('에러발생', error)
    }
  }

  const addTodo = async () => {
    try {
      const addTodoItem = {
        title: title.value,
        description: description.value,
        done: false
      }
      const response = await fetch('http://localhost:3000/todos', {
        method: 'POST',
        body: JSON.stringify(addTodoItem),
        headers: { 'Content-Type': 'application/json' }
      })
      const result = await response.json()
      if (response.ok) {
        todoList.value.push(result)
      } else {
        throw new Error('투두리스트 추가 실패')
      }
    } catch (error) {
      console.error('에러발생', error)
    }
  }

  const toggleDone = async id => {
    try {
      const todo = todoList.value.find(item => item.id === id)
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({ done: !todo.done }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (response.ok) {
        const updatedTodo = await response.json()
        const index = todoList.value.findIndex(item => item.id === id)
        todoList.value[index] = updatedTodo
      } else {
        throw new Error('완료 여부 수정 실패')
      }
    } catch (error) {
      console.error('에러발생', error)
    }
  }

  const deleteTodo = async id => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`, {
        method: 'DELETE'
      })
      if (response.ok) {
        todoList.value = todoList.value.filter(item => item.id !== id)
      } else {
        throw new Error('삭제 실패')
      }
    } catch (error) {
      console.error('에러발생', error)
    }
  }

  return {
    todoList,
    title,
    description,
    fetchTodoList,
    addTodo,
    toggleDone,
    deleteTodo
  }
}
