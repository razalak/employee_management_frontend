import { useNavigate } from "react-router-dom";
import { Form, SectionHeader } from "../../components";
import "./createEmployee.css";
import { useState } from "react";
import type { EmployeeType } from "../../types/types";
import { useDispatch } from "react-redux";
import { EMPLOYEE_ACTION_TYPES, type EmployeeState } from "../../store/employee/employee.types";

const CreateEmployee = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({} as EmployeeType);
  const dispatch=useDispatch();

  const createClicked = () => {
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
      dispatch({type:EMPLOYEE_ACTION_TYPES.ADD,payload:employee});
  }
  const cancelClicked = () => navigate(-1);

  return (
   <>

    <main className="create-employee-page-main">
      <SectionHeader title="Create Employee" showButton={false} showFilter={false}/>
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