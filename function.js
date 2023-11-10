const { default: fetch } = require("node-fetch");
const fetchTodos = async (dispatch, getState) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_limit=5`
  );
  const todos = await response.json();
  console.log(todos);
  dispatch({
    type: "todos/totoLoaded",
    payload: todos,
  });
  console.log(`updated todo:${getState().todos.length}`);
  return;
};
module.exports = {
  fetchTodos,
};
