const createThunkMiddleware = ({ dispatch }) => (next) => (action) => {
  if (typeof action === 'function') {
    // console.log('dispatch', dispatch);
    // console.log('next', next);
    // console.log('if action', action);
    
    return action(dispatch); //goes to an action to a POJO
  }
  else  {
    // console.log('else action', action);
    next(action); //action is now a POJO!
  }
};

export default createThunkMiddleware;

// const createThunkMiddleware = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState);
//   }
//   return next(action);
// };

// export default createThunkMiddleware;



//object deconstruct dispatch from the store. 