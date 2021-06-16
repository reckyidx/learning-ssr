const initialState = {
  isLogged: 0,
};
const Authentication = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLogged: action.payload,
      };
    default:
      return state;
  }
};
export default Authentication;
