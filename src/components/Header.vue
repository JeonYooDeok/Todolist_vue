<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/todolist">To do list</router-link>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  /* 스타일 추가 시 여기에 작성 */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline;
  margin-right: 16px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
