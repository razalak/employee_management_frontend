import { createSlice,type PayloadAction } from "@reduxjs/toolkit";
import type { Employee,EmployeeState } from "./employee.types";


const initialState:EmployeeState={employees:[]};

export const employeeSlice=createSlice({
    name:'employee',
    initialState,
    reducers:{
        addEmployee:(state,action:PayloadAction<Employee>)=>{
            console.log("🚀 ~ action:", action)
            console.log("🚀 ~ state:", state)
            state.employees.push(action.payload);
        },
    }
})

export const {addEmployee} = employeeSlice.actions;
export default employeeSlice.reducer;