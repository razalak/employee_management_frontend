import { EditEmployee } from "../../pages";
import type { Employee } from "../../store/employee/employee.types";
import BaseApi from "../api";
import type { CreatePayload, CreateResponse, Department, EditPayload } from "./types";

export const employeeApi = BaseApi.injectEndpoints({
  endpoints: (builder) => ({
    create: builder.mutation<CreateResponse, CreatePayload>({
      query: (payload) => ({
        url: "/employees",
        method: "POST",
        body: payload,
      }),
    }),
    getEmployeeList: builder.query<Employee[], void>({
      query: () => ({
        url: "/employees",
        method: "GET",
      }),
      providesTags: ["EMPLOYEES"],
    }),
    getEmployee: builder.query<Employee, { id: string }>({
      query: ({ id }) => ({
        url: `/employees/${id}`,
        method: "GET",
      }),
      providesTags: ["EMPLOYEE_DETAILS"],
    }),
    deleteEmployee: builder.mutation({
      query: ({ id }) => ({
        url: `/employees/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["EMPLOYEES"],
    }),
    EditEmployee: builder.mutation<CreatePayload, EditPayload>({
      query: ({ id, ...payload }) => ({
        url: `/employees/${id}`,
        method: "PUT",
        body: payload,
      }),
    }),
    getDepartmentList: builder.query<Department[], void>({
      query: () => ({
        url: "/department",
        method: "GET",
      }),
      providesTags: ["DEPARTMENTS"],
    }),
  }),
});

export const {
  useCreateMutation,
  useGetEmployeeListQuery,
  useGetEmployeeQuery,
  useDeleteEmployeeMutation,
  useEditEmployeeMutation,
  useGetDepartmentListQuery
} = employeeApi;
