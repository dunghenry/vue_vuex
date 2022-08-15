import axios from 'axios';
const moduleTodos = {
    state: () => ({
        todos: [],
        todo: {},
        isUpdate: false,
        todoUpdate: {},
    }),
    getters: {
        get_todos(state) {
            return state.todos;
        },
        get_is_update(state) {
            return state.isUpdate;
        },
        get_todo_update(state) {
            return state.todoUpdate;
        }
    },
    mutations: {
        SET_TODOS(state, payload) {
            state.todos = payload
        },
        GET_TODO(state, payload) {
            state.todo = payload
        },
        ADD_TODO(state, payload) {
            state.todos = [...state.todos, payload]
        },
        DELETE_TODO(state, id) {
            state.todos = state.todos.filter(todo => todo._id !== id)
        },
        SET_TODO_UPDATE(state, id) {
            if (id) {
                state.isUpdate = true
                state.todoUpdate = state.todos.find(todo => todo._id === id)
            }
        },
        UPDATE_TODO(state, payload) {
            console.log(payload)
            state.todos = state.todos.map(todo =>{
                if(todo._id === payload._id){
                    todo.title = payload.title
                    todo.description = payload.description
                    todo.description = payload.description
                    todo.createdAt = payload.createdAt
                    todo.updatedAt = payload.updatedAt
                }
                return todo;
            })
        }
    },
    actions: {
        async setTodos({ commit }) {
            try {
                const response = await axios.get("https://express-mongodb-todos.herokuapp.com/api/v1/todos");
                commit('SET_TODOS', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async getTodoById({ commit }, id) {
            try {
                const response = await axios.get(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`);
                commit('GET_TODO', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async addTodo({ commit }, newTodo) {
            try {
                const response = await axios.post("https://express-mongodb-todos.herokuapp.com/api/v1/todos", newTodo);
                commit('ADD_TODO', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async deleteTodoById({ commit }, id) {
            try {
                const response = await axios.delete(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`);
                commit('DELETE_TODO', id);
            } catch (error) {
                console.log(error);
            }
        },
        async updateTodoById({ commit }, data) {
            try {
                const title = data.title
                const description = data.description
                const response = await axios.put(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${data.id}`, {title: title, description: description});
                commit('UPDATE_TODO', response.data);
            } catch (error) {
                console.log(error);
            }
        }
    }
}

export default moduleTodos;