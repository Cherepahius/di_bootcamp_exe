export const ageUpAsync = () => {
    return (dispatch) => {
        dispatch({ type: 'AGE_UP_LOADING' });
        setTimeout(() => {
            dispatch({ type: 'AGE_UP', payload: 1 });
        }, 1000);
    };
};

export const ageDownAsync = () => {
    return (dispatch) => {
        dispatch({ type: 'AGE_DOWN_LOADING' });
        setTimeout(() => {
            dispatch({ type: 'AGE_DOWN', payload: -1 });
        }, 1000);
    };
};
