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
    if(action.type === 'DECREMENT'){
        return{
            counter: state.counter -1
        }
    }
    if(action.type === 'ADD'){
        return{
            counter: state.counter + action.val
        }
    }
    if(action.type === 'SUBTRACT'){
        return{
            counter: state.counter - action.val
        }
    }
    return state;
};
export default reducer;