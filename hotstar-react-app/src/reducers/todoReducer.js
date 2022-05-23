/*
  Reducer
  --
    * is a fn that will take two params (state, action)
    * action is an obj -- will have two properties inside 
    *   one is type of action, another one is payload (form data)
    * must return state

*/

// Possible action types: ADD_TODO, LIST_TODOS, UPDATE_TODO, DELETE_TODO

const todoReducer = (state = [], action) => {
  // based on the action type the reducer can return state data 
  switch(action.type){
    case 'ADD_TODO':
      return [...state, action.payload];

    // TODO: work with LIST_TODOS, EDIT_TODO, DELETE_TODO
    
    default:
      return state;
  }
}

export default todoReducer;