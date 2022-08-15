<template>
  <div>
    <h1>Single Todo</h1>
    <TodoItem :todo="todo"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TodoItem from '../components/todos/TodoItem.vue';
export default {
    name: "SingleTodo",
    created() {
      this.getTodoById(this.$route.params.id);
    },
    methods: { ...mapActions(["getTodoById"]),
    },
    components: { TodoItem },
    computed:{
      todo(){
        return this.$store.state.moduleTodos.todo
      }
    }
}
</script>

<style>

</style>