import { ADD_TO_CART, REMOVE_FROM_CART, USER_LIST, SET_USER_DATA } from './constants';
const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //   console.warn([...state,action.data]);
            return [...state, action.data]
        case REMOVE_FROM_CART:
            const result = state.filter((item) => {
                return item.name != action.data
            })
            return [...result]
       // case USER_LIST:
       //     return [...state, action.data]
        case SET_USER_DATA:
            return action.data
        default:
            return state
    }
};
export default reducer;