import actions from './actions';
import mutations from './mutations';
export default {
    state: {
        todoList:[],
        todoInfo:{
            id: 0,
            text: '',
            isDone: false,
        },
        selected: 0
    },
    actions: actions,
    mutations: mutations,

};
