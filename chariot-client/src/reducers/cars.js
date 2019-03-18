
export default (state = {cars: []}, action) => {
    switch(action.type) {
        case 'GET_CARS_SUCCESS':

        return Object.assign({}, state, {cars: action.payload})

        case 'CREATE_CAR_SUCCESS':
        
        return Object.assign({}, state, {cars: action.payload})

        case 'REMOVE_CAR;':
        return state.filter(car => car.id !== action.id)

        case 'SORT_CARS;':
        return Object.assign({}, state, { cars: action.payload})

        default:
            return state;
    }
}