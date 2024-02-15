import {createSlice} from '@reduxjs/toolkit';
import {User} from "../../types";



type InitialStateType = {
    user: User | null
}

const initialState: InitialStateType = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});

export const {login, logout} = userSlice.actions;

export const selectUserState = (state: any): {user: User} => state.user;
export default userSlice.reducer;
