import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {
        fetchUserStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchUserSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchUserFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});
export const fetchUser = () => async (dispatch) => {
    dispatch(fetchUserStart());

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const data = await response.json();
        dispatch(fetchUserSuccess(data));
    } catch (error) {
        dispatch(fetchUserFailure('Failed to fetch user data.'));
    }
};


export const { fetchUserStart, fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;
