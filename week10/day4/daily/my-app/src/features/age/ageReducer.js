const initialState = {
    value: 0,
    loading: false,
};

const ageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AGE_UP_LOADING':
        case 'AGE_DOWN_LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'AGE_UP':
            return {
                ...state,
                value: state.value + action.payload,
                loading: false,
            };
        case 'AGE_DOWN':
            return {
                ...state,
                value: state.value + action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default ageReducer;
