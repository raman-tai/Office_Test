import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    userType: null,
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        authRequest(state) {
            state.loading = true;
            state.error = false
        },
        authSuccess(state, action) {
            state.loading = false;
            state.isAuthenticated = true;
            state.userType = action.payload;
            state.error = null;
        },
        authFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        clearState(state, _action) {
            state.isAuthenticated = false;
        }
    }
})

export const { authRequest, authFailure, authSuccess, clearState } = authSlice.actions;
export default authSlice.reducer;