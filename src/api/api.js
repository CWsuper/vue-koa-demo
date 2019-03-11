import methods from '../plugins/axios';

const GetData = () => {
    return methods.get('/getJson');
}

const Login = (loginData) => {
    return methods.post('/login',loginData);
}

const Register = (registerData) => {
    return methods.post('/register',registerData);
}
export {
    GetData,
    Login,
    Register,
}