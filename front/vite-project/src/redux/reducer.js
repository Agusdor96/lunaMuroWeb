import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    userData: {},
    userAppointment: []
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        logInUser:(state, action) => {
            state.userData = action.payload
        },
        getUserAppoint: (state, action) =>{
            state.userAppointment = action.payload;
           
        },
        createAppointment:(state, action) =>{ 
            state.userAppointment.push(action.payload)
        },
        cancelAppointment:(state, action) =>{
            state.userAppointment = state.userAppointment.map((shift) =>{
                if(action.payload === shift.id){
                    return {...shift, status: "cancelled"}
                }
                return shift;
            })
        }
    }    
})



export const {logInUser, getUserAppoint, createAppointment, cancelAppointment} = userSlice.actions;
