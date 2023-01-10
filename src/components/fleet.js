import {useSelector} from 'react-redux'
import {increment, decrement, sign_in, deleteItem, add} from "../actions";
import {useDispatch} from 'react-redux'
import {useState} from "react";

const Fleet = () => {
    const [inputValue, setValue] = useState('')
    const students = useSelector(state => state.students)
    const count = useSelector(state => state.counter)
    const isLogged = useSelector(state => state.isLogged)
    const dispatch = useDispatch()
//    console.log(inputValue)
    return (
        <div>
            <div>
                <input type="text" onChange={(e) => setValue(e.target.value)}/>
                <button onClick={() => dispatch(add(inputValue))}>add</button>
                <ul>
                    {students?.map(({id, name}) => (
                        <li key={id}>{name}
                            <button onClick={() => dispatch(deleteItem(id))}>delete</button>
                        </li>
                    ))}
                </ul>
                <h1>Hello in Fleet file {count}</h1>
                <button onClick={() => dispatch(increment(5))}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(sign_in())}>sign in</button>
                {isLogged ? <h3>heeeeeeeeeeeey</h3> : ''}
            </div>
        </div>
    )
}

export default Fleet