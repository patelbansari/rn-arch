import { IS_SPLASH, USER_TOKEN, USER_CURRENT_LOCATION } from "./Action"

export const updateIsSplashState = (isSplash) => {
    return { type: IS_SPLASH, isSplash }
} 

export const updateUserToken = (token) => {
    return { type: USER_TOKEN, token }
} 

export const updateUserCurrentLocation = (location) => {
    return { type: USER_CURRENT_LOCATION, location }
}