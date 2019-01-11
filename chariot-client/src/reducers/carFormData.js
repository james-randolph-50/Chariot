const initialState = {
    name: '',
    price: 0,
    img_url: '',
    year: 0
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'UPDATED_DATA':
            return action.carFormData

        case 'RESET_CAR_FORM':
            return state;

        default:
            return state;
    }
}