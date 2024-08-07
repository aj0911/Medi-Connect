import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    isAuth:false,
    user:null
}

const authSlice = createSlice({
    name:'Auth',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.isAuth = true;
            state.user=action.payload;
        },
        logout:(state)=>{
            state.isAuth=false;
            state.user=null;
        }
    }
})

export const {logout,login} = authSlice.actions;
export default authSlice.reducer;