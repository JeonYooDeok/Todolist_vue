import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import TodoList from './components/TodoList.vue'

// Define routes
const routes = [
  { path: '/', component: Home },
  { path: '/todolist', component: TodoList }
]

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes
})

// Create app instance
const app = createApp(App)

// Use router
app.use(router)

// Mount app
app.mount('#app')
