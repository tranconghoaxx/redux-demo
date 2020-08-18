const initialState = {
    counter: 0
}
const reducer = (state = initialState ,action) => {
    // xu ly hanh dong gui di dispatch tu component ben counter.js o day
    if(action.type === 'INCREMENT'){
        return{
            counter: state.counter + 1
        }
    }
    return state;
};
export default reducer;