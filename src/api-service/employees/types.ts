import type { Employee } from "../../store/employee/employee.types";

export interface CreatePayload{
  email?: string;
  password?: string;
  name?: string;
  age?: number;
  role?: string;
  status?: string;
  joiningdate?: string | Date;
  experience?: number;
  employeeId?: string;
  address?: {
    line_1?: string;
    line_2?: string;
    houseno?: number;
  };
  department?: {
    id?:number;
    dpt_name?: string;
  };
}
export interface EditPayload{
  id?:number|string;
  email?: string;
  password?: string;
  name?: string;
  age?: number;
  role?: string;
  status?: string;
  joiningdate?: string | Date;
  experience?: number;
  employeeId?: string;
  address?: {
    line_1?: string;
    line_2?: string;
    houseno?: number;
  };
  department?: {
    id?:number;
    dpt_name?: string;
  };
}

export type CreateResponse =void;
