const { createStore, applyMiddleware } = require("redux"); //common syntax
const { fetchTodos } = require("./function");
const thunk = require("redux-thunk");

const initalState = {
  todos: [],
};
const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: action.payload,
          },
        ],
      };
    case "todos/totoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...action.payload],
      };
  }
};
const store = createStore(todoReducer, applyMiddleware(thunk.default));

//subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});
//dispatch action
// store.dispatch({
//   type: "todos/todoAdded",
//   payload: "mayeda practising redux",
// });
store.dispatch(fetchTodos);
