export default (state = [], action) => {
    switch(action.type) {
        case 'GET_CARS_SUCCESS':
            return action.cars;

        case 'CREATE_CAR_SUCCESS':
            return action.concat(action.car);

        default:
        return state;
    }
}