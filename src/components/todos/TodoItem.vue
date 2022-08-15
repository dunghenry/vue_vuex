<template>
  <div v-if="todo._id" class="item">
    <h3>Title: {{ todo.title }}</h3>
    <p>Description: {{ todo.description }}</p>
    <p class="created"><b>created:</b> {{ moment(todo.createdAt) }}</p>
    <p class="updated"><b>updated:</b> {{ moment(todo.updatedAt) }}</p>
    <div class="btn">
      <button @click="setTodoUpdate(todo._id)" class="btn_update">Update</button>
      <button @click="deleteTodoById(todo._id)" class="btn_delete">Delete</button>
    </div>
    <router-link :to="'/todos/' + todo._id">
      Single page
    </router-link>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import moment from 'moment';
import { mapActions, mapMutations } from 'vuex';
export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    moment: function (date) {
      return moment(date).fromNow()
    },
    ...mapActions(["deleteTodoById"]),
    ...mapMutations(['SET_TODO_UPDATE']),
    setTodoUpdate(id) {
      this.SET_TODO_UPDATE(id);
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  margin: 5px 0;
}

button {
  width: 80px;
  display: inline-block;
  padding: 7px 0;
  margin-right: 10px;
  cursor: pointer;
  border: none;
  border-radius: 3px;
  color: white;

}

p {
  padding: 5px 0;
}

.btn {
  margin: 3px 3px;
  display: flex;
}

button.btn_update {
  background-color: #196dece8;
}

button.btn_delete {
  background-color: #d63b4bda;
}

p.created,
p.updated {
  font-size: 12px;
  color: gray;
  margin-top: -10px;
  line-height: 15px;
}
</style>