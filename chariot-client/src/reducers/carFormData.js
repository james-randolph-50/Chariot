export default (state = {
    name: '',
    price: 0,
    img_url: '',
    year: 2019
}, action) => {

    switch(action.type) {
        case 'UPDATED_DATA':
            return action.carFormData

        case 'RESET_CAR_FORM':
            return state;

        default:
            return state;
    }
}