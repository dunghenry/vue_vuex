<template>
  <Header />
   <router-view></router-view>
</template>

<script>
import Header from './components/header/index.vue'
export default {
  name: "App",
  components: {Header},
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
div{
  width: 80%;
  margin: 10px auto;
  overflow: hidden;
}
</style>