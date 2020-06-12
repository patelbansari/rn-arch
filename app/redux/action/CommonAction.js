import { IS_SPLASH, USER_TOKEN } from "./Action"

export const updateIsSplashState = (isSplash) => {
    return { type: IS_SPLASH, isSplash }
} 

export const updateUserToken = (token) => {
    return { type: USER_TOKEN, token }
} 