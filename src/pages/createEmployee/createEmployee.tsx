import { useNavigate } from "react-router-dom";
import { Form, SectionHeader } from "../../components";
import "./createEmployee.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  EMPLOYEE_ACTION_TYPES,
  type Employee,
  type EmployeeState,
} from "../../store/employee/employee.types";
import { addEmployee } from "../../store/employee/employeeReducer";
import { useCreateMutation } from "../../api-service/employees/employees.api";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({} as Employee);
  const dispatch = useDispatch();
  const [createEmployee, { isLoading }] = useCreateMutation();

  const departmentIdMap: Record<string, number> = {
    FRONTEND: 20,
    BACKEND: 21,
    DEVOPS: 16,
  };

  const createClicked = () => {
    console.log("clicked", employee);
    // employee.id=Math.floor(Math.random()*1000);
    const selectedDept = employee.department?.dpt_name?.toUpperCase() || "";

    createEmployee({
      ...employee,
      age: Number(employee.age),
      experience: Number(employee.Experience),
      joiningdate: new Date(employee.joiningdate),
      address: {
        ...employee.address,
        houseno: Number(employee.address?.houseno),
      },
      department: {
        id: departmentIdMap[selectedDept] || 0, // fallback if department name not recognized
        dpt_name: employee.department?.dpt_name,
      },
    });

    navigate("/employee")
    // const Employee:EmployeeType={
    //     employeeId:employee.employeeId?.toString(),
    //     email:employee.email,
    //     name:employee.name,
    //     age:employee.age,
    //     address:employee.address,
    //     password:employee.password,
    //     role:employee.role,
    //     dateOfJoining:employee.dateOfJoining,
    //     experience:employee.experience,
    //     status:employee.status,
    //     department:{
    //       name:employee.department?.name
    //     }
    // dispatch({type:EMPLOYEE_ACTION_TYPES.ADD,payload:employee});
    dispatch(addEmployee(employee));
  };
  const cancelClicked = () => navigate(-1);

  return (
    <>
      <main className="create-employee-page-main">
        <SectionHeader
          title="Create Employee"
          showButton={false}
          showFilter={false}
        />
        <Form
          employee={employee}
          setEmployee={setEmployee}
          handleCancel={cancelClicked}
          handleSave={createClicked}
        />
      </main>
    </>
  );
};

export default CreateEmployee;
