const arr = [{id: 1, name: 'Asad'}, {id: 2, name: 'Sardor'}]

export const studentsReducer = (state = [], action) => {
    switch (action?.type) {
        case 'DELETE':
            return state?.filter(item => item.id !== action.payload)
        case 'ADD':
            return state?.push(action.payload)
        default :
            return state
    }
}
export default studentsReducer;