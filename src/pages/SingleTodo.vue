<template>
  <div>
    <h1>Single Todo</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'SingleTodo',
  created(){
    this.getTodoById(this.$route.params.id)
  },
  methods: {...mapActions(["getTodoById"])},
}
</script>

<style>

</style>