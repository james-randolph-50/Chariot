// Action Creators

export const updateCarFormData = CarFormData => {
    return {
        type: 'UPDATED_DATA',
        carFormData
    }
}

export const resetCardForm = () => {
    return {
        type: 'RESET_CAR_FORM'
    }
}