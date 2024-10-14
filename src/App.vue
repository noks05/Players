<template>
   <div>
    <h1>Добавить нового игрока</h1>
    <WrapperSwitch />
   </div>
</template>

<script>

import WrapperSwitch from "./components/WrapperSwitch.vue";

export default {
  name: 'App',
  components: {WrapperSwitch},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
