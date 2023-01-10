import {createSlice} from '@reduxjs/toolkit'

const initialStateValue = {name: '', age: 0, email: ''}

export const userSlice = createSlice({
    name: 'User',
    initialState: {value: initialStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {login} = userSlice.actions;
export default userSlice.reducer;
