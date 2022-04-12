/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';

const initialStateRegister = {
    form: {
        fullName: '',
        email:'',
        password: '',
    },
    title: 'Sign Up',
    desc: 'Masukkan Data Anda',
};

const initialStateLogin = {
    form: {
        email:'',
        password: '',
    },
    info: 'Masukkan Password Anda',
    isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
    if (action.type === 'SET_TITLE'){
        return{
            ...state,
            title: 'Register Ganti Title',
        };
    }
    if (action.type === 'SET_FORM') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            },
        };
    }
    return state;
};
//action.type itu untuk merubah jika action.type dilakukan


const LoginReducer = (state = initialStateLogin, action) => {
    if (action.type === 'SET_FORM') {
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType]: action.inputValue,
            },
        };
    }
    return state;
};

const reducer = combineReducers({
    RegisterReducer,
    LoginReducer,
});

export default reducer;
