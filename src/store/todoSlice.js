import { createSlice } from "@reduxjs/toolkit";

export const todoRedux = createSlice({
  name: "todo",
  initialState: {
    todos: [{ id: 1, todo: "todo msg", completed: false }],
  },
  reducers: {
    addTodo: (state , action) => {
      const newTodo = {
        id : Date.now(),
        todo : action.payload.todo,
        completed : false,
      }
      state.todos.push(newTodo);
    },

    updateTodo: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.todo = updatedTodo;
      }
    },

    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter(todo => todo.id !== id);
    },

    toggleComplete: (state, action) => {
      const id = action.payload;
      const todo = state.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const {addTodo , updateTodo , deleteTodo , toggleComplete} = todoRedux.actions;

export default todoRedux.reducer;

