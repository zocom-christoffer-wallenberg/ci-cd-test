<template>
  <div id="app">
    <SearchFilter />
  </div>
</template>

<script>
import SearchFilter from './components/SearchFilter.vue'

export default {
  name: 'App',
  components: {
    SearchFilter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
