import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
    { task: "Clean room", completed: true },
    { task: "Clean garage", completed: false }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newToDo = { task: action.payload, completed: false };
      return {
        ...state,
        todos: [...state.todos, newToDo]
      };

    case TOGGLE_TODO:
      const newState = [...state.todos];
      newState.forEach((todo, index) => {
        if (index === action.payload) {
          todo.completed = !todo.completed;
        }
      });
      return {
        ...state,
        todos: newState
      };

    default:
      return state;
  }
};
