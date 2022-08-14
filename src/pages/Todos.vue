<template>
  <div>
    <h1>Todos Page</h1>
    <Todos />
    <!-- <button @click="setTodos">SET TODOS</button> -->
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Todos from '../components/todos/Todos.vue'
export default {
  name: 'TodosPage',
  components: {
    Todos
  },
  methods:{...mapActions(['setTodos'])},
}
</script>

<style>

</style>