import {useSelector} from 'react-redux'
import Login from "./Login";

const Profile = () => {
    const user = useSelector(store => store.user.value)
    return (
        <div>
            <h1>Profile page</h1>
            <p>name: {user.name}</p>
            <p>email: {user.email}</p>
            <p>age: {user.age}</p>
            <Login/>
        </div>
    )
}

export default Profile