import { EMPLOYEE_ACTION_TYPES, type EmployeeAction, type EmployeeState } from "./employee.types";

const initialState={employees:[]};

export default function employeeReducer(state:EmployeeState=initialState,action:EmployeeAction){
        switch(action.type){
            case EMPLOYEE_ACTION_TYPES.ADD:{
                console.log("action",action)
                  return{
                    ...state,
                    employees:[...state.employees,action.payload]
                }
            }
            default:
                return state;
        }
}