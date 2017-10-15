import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actionTypes.js';

let nextTodoId = 0;

export const addTodo = (text) => ({
  type: ADD_TODO,
  text: text,
  completed: false,
  id: nextTodoId ++
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
});