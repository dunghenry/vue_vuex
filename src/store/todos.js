import axios from 'axios';
const moduleTodos = {
    state: () => ({
        todos: [],
        todo: {},
    }),
    getters: {
        get_todos(state) {
            return state.todos;
        }
    },
    mutations: {
        SET_TODOS(state, payload) {
            state.todos = payload
        },
        GET_TODO(state, payload) {
            state.todo = payload
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
        async addTodo({ commit}, newTodo){
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
                commit('DELETE_TODO', response.data);
            } catch (error) {
                console.log(error);
            }
        },
        async updateTodoById({commit}, todoUpdate){
            try {
                const response = await axios.put(`https://express-mongodb-todos.herokuapp.com/api/v1/todos/${id}`, todoUpdate);
                commit('UPDATE_TODO', response.data);
            } catch (error) {
                console.log(error);
            }
        }
        
    }
}

export default moduleTodos;