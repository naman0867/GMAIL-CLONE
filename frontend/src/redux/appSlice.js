import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name:"app",
    initialState:{
        open:false 
        user:null
    },
    reducers:{
        setOpen:(state,action)=>{
            state.open = action.payload
        },
        setAuthUser:(state,action)=>{
            state.user = action.payload;

        },
        setEmails:(state,action) =>{
            state.emails = action.payload;
        }

    }
});
export const {setOpen,setAuthUser,setEmails} = appSlice.actions;
export default appSlice.reducer;
