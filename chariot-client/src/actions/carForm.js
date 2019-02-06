// Action Creators

export const updateCarFormData = carFormData => {
    return {
        type: 'UPDATED_DATA',
        carFormData
    }
}

export const resetCarForm = () => {
    return {
        type: 'RESET_CAR_FORM'
    }
}