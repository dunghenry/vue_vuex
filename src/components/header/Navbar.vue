<template>
  <div>
    <ul>
      <li>
        <router-link to="/todos">Todos</router-link>
      </li>
      <li v-if="!get_current_user?.username">
        <router-link to="/login">Login</router-link>
      </li>
      <li v-if="get_current_user?.username">
        <button @click="handleLogout">Logout</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  name: 'Navbar',
  computed: {...mapGetters(["get_current_user"])},
  methods: {...mapMutations(["LOGOUT"]),
    handleLogout(){
      const router = this.$router
      console.log(router)
      this.LOGOUT(router);
    }
  }
}
</script>

<style scoped>
div > ul{
  list-style-type: none;
  display: flex;

}
li > a {
  display: inline-block;
  padding: 13px 20px;
}
button{
  margin-top: 10px;
  padding: 5px 10px;
  cursor: pointer;
  margin-left: 10px;
}

</style>