const initialState = {
  counter: 0,
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "sub":
      console.log(state.counter);
      return {
        ...state,
        counter: state.counter > 0 ? state.counter - 1 : 0,
      };
    default:
      return state;
  }
};
export default Reducer;
