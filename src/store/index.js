import { createStore } from 'vuex';
import moduleTodos from './todos';
import moduleAuthor from './auth';
const store = createStore({
    modules: {
        moduleTodos,
        moduleAuthor,
    },
})
export default store;