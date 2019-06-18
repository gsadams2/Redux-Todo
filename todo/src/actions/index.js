export const ADD_TODO = "ADD_TODO";

export const addToDo = newToDo => {
  console.log(newToDo);
  return {
    type: ADD_TODO,
    payload: newToDo
  };
};

export const TOGGLE_TODO = "TOGGLE_TODO";

export const toggleToDo = index => {
  console.log(index);
  return {
    type: TOGGLE_TODO,
    payload: index
  };
};
