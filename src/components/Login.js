import {useDispatch} from 'react-redux'
import {login} from '../features/user'

const Login = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(login({name: 'Asad', age: 20, email: 'asad@gmail.com'}))}>Login</button>
    )
}

export default Login