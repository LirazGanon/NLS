<template>
  <img src="./assets/wicks.png" alt="" />
  <br>
  <h1>Welcome to my vite app</h1>
  <h2>{{ msg }}</h2>
  <nav>
    <router-link to="/"> Home ||</router-link>
    <router-link to="/about"> About ||</router-link>
    <router-link to="/dnd"> dnd ||</router-link>
    <router-link to="/dnc"> dynamic ||</router-link>
    <router-link to="/dnc2"> dynamic2 || </router-link>
    <router-link to="/lirazdnd"> lirazdnd </router-link>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'This is my msg'
    }
  },
}
</script>