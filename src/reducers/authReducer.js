// redux/authReducer.js

const initialState = {
    user: null,
  };
  
  export const loginUser = (user) => ({
    type: 'LOGIN',
    payload: user,
  });
  
  export const registerUser = (user) => ({
    type: 'REGISTER',
    payload: user,
  });
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
        };
      case 'REGISTER':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  