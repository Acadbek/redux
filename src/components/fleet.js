import {useSelector} from 'react-redux'
import {increment, decrement, sign_in} from "../actions";
import {useDispatch} from 'react-redux'

const Fleet = () => {
    const count = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
    return (
        <div>
            <h1>Hello in Fleet file {count}</h1>
            <button onClick={() => dispatch(increment(5))}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(sign_in())}>sign in</button>
            {isLogged ? <h3>heeeeeeeeeeeey</h3> : ''}
        </div>
    )
}

export default Fleet