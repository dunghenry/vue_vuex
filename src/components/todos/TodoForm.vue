<template>
    <div>
        <form @submit="handleSubmit">
            <div>
                <label>Title: </label><br />
                <input v-if="!get_is_update" type="text" v-model="title" />
                <input
                    v-else
                    type="text"
                    ref="inputTitle"
                    :value="title === '' ? get_todo_update.title : title"
                />
            </div>
            <div>
                <label>Desc: </label><br />
                <input v-if="!get_is_update" type="text" v-model="description" />
                <input
                    v-else
                    type="text"
                    ref="inputDes"
                    :value="description === '' ? get_todo_update.description : description"
                />
            </div>
            <div>
                <h1>{{ title }}</h1>
                <button class="btn" v-if="!get_is_update" type="submit">Submit</button>
                <button class="btn" v-else type="button" @click="handleUpdate">Update</button>
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'TodoForm',
    data() {
        return {
            title: '',
            description: '',
        };
    },
    computed: {
        ...mapGetters(['get_is_update', 'get_todo_update']),
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            if (this.title && this.description) {
                this.addTodo({ title: this.title, description: this.description });
                this.title = '';
                this.description = '';
            } else {
                alert('Title or description is required');
            }
        },
        ...mapActions(['addTodo', 'updateTodoById']),
        handleUpdate() {
            const title = this.$refs.inputTitle.value;
            const description = this.$refs.inputDes.value;
            const id = this.get_todo_update._id;
            const updateTodo = { id, title, description };
            if (title && description && id) {
                this.updateTodoById(updateTodo);
                this.$store.state.moduleTodos.isUpdate = false;
                this.$refs.inputTitle.value = '';
                this.$refs.inputDes.value = '';
            } else {
                alert('Title or description is required');
            }
        },
    },
};
</script>
<style scoped>
form {
    width: 100%;
    margin: 10px 0;
}

form > div > input {
    display: inline-block;
    margin: 5px 0;
    width: 97%;
    padding: 5px 5px;
    border-radius: 3px;
    outline: none;
    border: 1px solid gray;
}

form > div > input:focus {
    border: 2px solid #20c997;
}

button.btn {
    float: right;
    cursor: pointer;
    padding: 8px 10px;
    border-radius: 3px;
    display: inline-block;
    margin: 5px 0;
    color: #ffff;
    background-color: #20c997;
    border: none;
}
</style>
