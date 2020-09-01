import { IS_SPLASH, USER_TOKEN, USER_CURRENT_LOCATION } from "../action/Action";

const initialState = {
    isSplash: true,
    userToken: null,
    userCurrentLocation:{}
}
export default CommonReducers = (state = initialState, action) => {
    console.log('action',action)
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
        case USER_CURRENT_LOCATION:
            return {
                ...state,
                userCurrentLocation: action.location
            };

        default:
            return state;
    }
};
