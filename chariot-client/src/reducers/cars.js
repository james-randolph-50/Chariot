export default (state = [], action) => {
    switch(action.type) {
        case 'GET_CAR_SUCCESS';
        return action.cars;

        default:
        return state;
    }
}