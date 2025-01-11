import { useNavigate } from 'react-router';
import LoginForm from './LoginForm'

const Login = ()=>{
    const navigate = useNavigate();

    const handleSubmit = (loginForm,formikBag)=>{
        console.log(formikBag);
        formikBag.resetForm()
        navigate("/dashboard")
    }

    return <div className='h-full w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex
     flex-col justify-center items-center p-8 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
        <LoginForm handleSubmit={handleSubmit}></LoginForm>
    </div>
}




export default Login;