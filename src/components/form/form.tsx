import {  useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import Button from "../button/Button";
import SelectInputField from "../selectInputField/selectInputField";
import TextInputField from "../textInputField/textInputField";
import "./form.css"
import type { Employee } from "../../store/employee/employee.types";

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
  const roles = ["HR", "DEVELOPER", "UI", "UX"];
  const departments = ["FRONTEND","DEVOPS","BACKEND"];
  const statuses = ["ACTIVE", "INACTIVE", "PROBATION"];
   const localStorage = useLocalStorage();

  const handleLogin=()=>{
    localStorage.set("token","");
    navigate("/login");
  }
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
          placeholder="Password"
          name="password"
          value={""}
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
          value={employee.joiningdate}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <TextInputField
          label="Experience (Yrs)"
          placeholder="Experience"
          name="experience"
          value={employee.Experience}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <SelectInputField
          label="Department"
          placeholder="Choose Department"
          name="department"
          values={departments}
          value={employee.department?.dpt_name}
          onChange={(e) => {
            setEmployee({ ...employee, department: { dpt_name: e.target.value } });
          }}
        />
        <SelectInputField
          label="Role"
          placeholder="Choose Role"
          name="role"
          values={roles}
          value={employee.role}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
          }}
        />
        <SelectInputField
          label="Status"
          placeholder="Status"
          name="status"
          values={statuses}
          value={employee.status}
          onChange={(e) => {
            setEmployee({ ...employee, [e.target.name]: e.target.value });
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