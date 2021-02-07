import { authAPI, profileAPI } from "../DAL/API";

const SET_LOGIN = 'SET_LOGIN';

let initialState = {
    isLogin: false,
    userId: null,
    email: null,
    login: null,
    avatar: null

}
const auth_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN: {
            return { ...state, ...action.data, isLogin: true }
        }
        default: return state
    }
}
export const setLogin = (userId, email, login, avatar) => ({ type: SET_LOGIN, data: { userId, email, login, avatar } });
export const getAuth = () => {
    return (dispatch) => {
        authAPI.getAuthMe().then(data => {

            if (data.resultCode === 0) {
                let { id, login, email } = data.data;
                profileAPI.getProfilePhoto(id).then(data => {
                    dispatch(setLogin(id, login, email, data.small));
                });
            }
        });
    }
}
export default auth_reducer;