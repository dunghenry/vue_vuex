<template>
  <div>
    <TodoForm/>
      <div class="box">
        <h1>List Todo</h1>
        <div class="todos" v-for="todo in get_todos" :key="todo._id">
        <TodoItem :todo="todo"/>
        </div>
      </div>  
  </div>
</template>
<script>
import TodoForm from './TodoForm.vue';
import TodoItem from './TodoItem.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "Todos",
  created(){
    this.setTodos();
  },
  components: { TodoForm, TodoItem },
  computed:{...mapGetters(["get_todos"])},
  methods: {...mapActions(["setTodos"])}
}
</script>

<style scoped>
  div{
    width: 100%;
    display: flex;
  }
  div>div.box{
    margin-left: 100px;
    display: flex;
    flex-direction: column;
  }
</style>