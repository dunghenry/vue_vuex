<template>
  <div>
    <form @submit="handleSubmit">
        <div>
            <label>Title: </label>
            <input type="text" v-model="title" />
        </div>
         <div>
            <label>Desc: </label>
            <input type="text" v-model="description" />
        </div>
        <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'TodoForm',
    data(){
        return {
            title: '',
            description: ''
        }
    },
    methods:{
        handleSubmit(e){
            e.preventDefault();
            if(this.title && this.description){
                this.addTodo({title: this.title, description: this.description});
            }
            else{
                alert('Title or description is required');
            }
        },
        ...mapActions(["addTodo"])
    }
}
</script>
<style scoped>

</style>