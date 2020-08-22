import * as actionTypes from "../actions";

const initialState = {
  results: [],
};
const reducer = (state = initialState, action) => {
  // xu ly hanh dong gui di dispatch tu component ben counter.js o day
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result }),
      };
    case actionTypes.DELETE_RESULT:
      const updateArray = state.results.filter(
        (result) => result.id !== action.resultElId
      );
      return {
        ...state,
        results: updateArray,
      };
  }
  return state;
};
export default reducer;
