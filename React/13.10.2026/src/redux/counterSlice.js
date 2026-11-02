import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:0,
}

const counterSlice = createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },

        decrement:(state)=>{
            state.value-=1;
        },
        double:(state)=>{
            state.value*=2;
        },
        zero:(State)=>{
            State *= 0;
        }
    }
})

export const{increment,decrement,double,zero}=counterSlice.actions
export default counterSlice.reducer;