/**
 * Type definitions for the employee domain in the Redux store.
 * This file contains:
 * - Employee data structure and related types (Address, Role, Status)
 * - Redux action types and action interfaces
 * - State interface for the employee slice
 */

export interface Address {
  houseno: number;
  line_1: string;
  line_2: string;
}

export const EmployeeRole = {
  UI: "UI",
  UX: "UX",
  DEVELOPER: "DEVELOPER",
  HR: "HR",
} as const;

export type Role = (typeof EmployeeRole)[keyof typeof EmployeeRole];

export const EmployeeStatus = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  PROBATION: "PROBATION",
} as const;

export type Status = (typeof EmployeeStatus)[keyof typeof EmployeeStatus];

export interface Employee {
  id?:number;
  employeeId: string;
  email: string;
  name: string;
  age: number;
  address: Address;
  password: string;
  role: Role;
  joiningdate: string;
  Experience: number;
  status: Status;
  department?: {
    id?:number;
    dpt_name?: string;
  };
}

export const EMPLOYEE_ACTION_TYPES = {
  ADD: "employee/ADD",
  DELETE: "employee/DELETE",
  UPDATE: "employee/UPDATE",
} as const;

export type EmployeeActionTypes =
  (typeof EMPLOYEE_ACTION_TYPES)[keyof typeof EMPLOYEE_ACTION_TYPES];

export interface EmployeeState {
  employees: Employee[];
}

export interface DeleteEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.DELETE;
  payload: string; // employee id
}

export interface UpdateEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.UPDATE;
  payload: Employee;
}

export interface AddEmployeeAction {
  type: typeof EMPLOYEE_ACTION_TYPES.ADD;
  payload: Employee;
}

export type EmployeeAction = DeleteEmployeeAction | UpdateEmployeeAction | AddEmployeeAction;