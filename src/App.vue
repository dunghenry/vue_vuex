<template>
  <router-view/>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "App",
  // created() {
  //   if(this.currentUser){
  //     this.$router.push('/');
  //   }
  //   else if(!this.currentUser){
  //     this.$router.push('/login');
  //   }
  // },
  computed: {...mapState(["currentUser"])}
}
</script>

<style scoped>
div{
  width: 80%;
  margin: 20px auto;
  overflow: hidden;
}
</style>