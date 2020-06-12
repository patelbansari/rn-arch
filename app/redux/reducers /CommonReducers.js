import { IS_SPLASH, USER_TOKEN } from "../action/Action";

const initialState = {
    isSplash: true,
    userToken: null
}
export default CommonReducers = (state = initialState, action) => {
    switch (action.type) {
        case IS_SPLASH:
            return {
                ...state,
                isSplash: action.isSplash
            };
        case USER_TOKEN:
            return {
                ...state,
                userToken: action.token
            };
        default:
            return state;
    }
};
