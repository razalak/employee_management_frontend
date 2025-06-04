import {  useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import Button from "../button/Button";
import SelectInputField from "../selectInputField/selectInputField";
import TextInputField from "../textInputField/textInputField";
import "./form.css"
import type { Employee } from "../../store/employee/employee.types";
import { useGetDepartmentListQuery } from "../../api-service/employees/employees.api";

type EmployeeFormProps = {
  employee: Employee;
  setEmployee: (employee: Employee) => void;
  handleCancel: () => void;
  handleSave: () => void;
};

const Form = ({
  employee,
  handleCancel,
  handleSave,
  setEmployee,
}: EmployeeFormProps) => {
  const isEdit = employee.id !== undefined;
  const navigate=useNavigate();
  const roles = [{label:"HR",value:"HR"},{label:"DEVELOPER",value:"DEVELOPER"},{label:"UI",value:"UI"},{label:"UX",value:"UX"}];
  // const departments = ["FRONTEND","DEVOPS","BACKEND"];
  const statuses = [{label:"ACTIVE",value:"ACTIVE"},{label:"INACTIVE",value:"INACTIVE"},{label:"PROBATION",value:"PROBATION"}];
  const localStorage = useLocalStorage();

  const {data: departmentData}=useGetDepartmentListQuery();

  const handleLogin=()=>{
    localStorage.set("token","");
    navigate("/login");
  }




   console.log({employee});
   

  return (
    <form className="employee-form">
      <div className="employee-detail-input-section">
        <TextInputField
          label="Employee Name"
          placeholder="Employee Name"
          name="name"
          value={employee.name}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Email"
          placeholder="abc@example.com"
          name="email"
          value={employee.email}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Password"
          placeholder={isEdit?"You cannot edit password":"password"}
          name="password"
          disabled={isEdit}
           value={isEdit ? "" : employee.password || ""}
          // style={{ display: "none" }}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Age"
          placeholder="Age"
          name="age"
          value={employee.age}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Joining Date"
          placeholder="Joining Date"
          name="joiningdate"
          type="date"
         value={employee.joiningdate?.toString().slice(0, 10)}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Experience (Yrs)"
          placeholder="Experience"
          name="Experience"
          value={employee.Experience}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <SelectInputField
          label="Department"
          placeholder="Choose Department"
          name="department"
          value={employee.department?.id}
          values={departmentData ? departmentData.map((dep) => ({
            value: dep.id,
            label: dep.dpt_name
          })) : []}
          onChange={(e) => {
            setEmployee({ ...employee, department: { id:parseInt(e.target.value),dpt_name: e.target.options[e.target.selectedIndex].text } });
          }}
        />
        <SelectInputField
          label="Role"
          placeholder="Choose Role"
          name="role"
           value={employee.role}
          values={roles}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.options[e.target.selectedIndex].text});
          }}
        />
        <SelectInputField
          label="Status"
          placeholder="Status"
          name="status"
          value={employee.status}
          values={statuses}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.options[e.target.selectedIndex].text});
          }}
        />

        <div className="multiline-input">
          <TextInputField
            label="Address"
            placeholder="Flat No./House No."
            name="houseno"
            value={employee.address?.houseno}
            onChange={(e) => {
              setEmployee({
                ...employee,
                address: {
                  ...employee.address,
                  [e.target.name]: e.target.value,
                },
              });
            }}
          />
          <TextInputField
            label=""
            placeholder="Address Line 1"
            name="line_1"
            value={employee.address?.line_1}
            onChange={(e) => {
              setEmployee({
                ...employee,
                address: {
                  ...employee.address,
                  [e.target.name]: e.target.value,
                },
              });
            }}
          />
          <TextInputField
            label=""
            placeholder="Address Line 2"
            name="line_2"
            value={employee.address?.line_2}
            onChange={(e) => {
              setEmployee({
                ...employee,
                address: {
                  ...employee.address,
                  [e.target.name]: e.target.value,
                },
              });
            }}
          />
        </div>
        <TextInputField
          label="Employee ID"
          disabled={isEdit}
          name="employeeId"
          placeholder="Employee ID"
          value={employee.employeeId}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
      </div>
      <div className="form-buttons">
        <Button
          label={isEdit ? "Edit" : "Create"}
          onClick={handleSave}
          variants="default"
          type="button"
        />
        <Button label="Cancel" onClick={handleCancel} variants="outline" />
      </div>
    </form>
  );
};

export default Form;