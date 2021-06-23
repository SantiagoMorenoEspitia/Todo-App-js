import { crearTodoHtml, saludar } from './js/componentes.js';
import './styles.css';
import {Todo,TodoList} from './classes'
export const todoList = new TodoList();
// const todos = [];
todoList.todos.forEach(todo => crearTodoHtml(todo)) ;

// const tarea = new Todo("Aprender javascript");

// todoList.nuevoTodo(tarea)
// crearTodoHtml(tarea)

// localStorage.setItem('Mi-key','ABC123')
// setTimeout(()=>{
//     localStorage.removeItem('M')
// },1500)