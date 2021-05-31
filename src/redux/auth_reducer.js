import { authAPI } from "../api/api";

const SET_UZER_DATA = 'SET_UZER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_UZER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUzerData = (userId, email, login, isAuth) => ({
    type: SET_UZER_DATA, payload:
        { userId, email, login, isAuth }
});

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUzerData(id, email, login, true));
    }
}

const onSubmit = data => console.log(data);

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.message.length > 0 ? response.data.message[0] : 'Some error';
        dispatch(onSubmit('login', { _error: message }));
    }
}


export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUzerData(null, null, null, false));
    }
}

export default authReducer;