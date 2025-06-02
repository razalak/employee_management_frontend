import { useNavigate, useParams } from "react-router-dom";
import { Form, SectionHeader } from "../../components";
import "./editEmployee.css";
import { useEffect, useState } from "react";
import type { EmployeeType } from "../../types/types";
import { useSelector } from "react-redux";
import type { Employee, EmployeeState } from "../../store/employee/employee.types";
import { useAppSelector } from "../../store/store";

const EditEmployee = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  // const employees=useSelector((state:EmployeeState)=>state.employees);
  const employees = useAppSelector((state) => state.employee.employees);
  const {id}=useParams();
  console.log("*******************",employees);
  const [employee, setEmployee] = useState(employees.find(((emp:any)=>emp.employeeId===id)) as Employee);


  const editClicked = () => alert("Edited");
  const cancelClicked = () => navigate(-1);

  // useEffect(() => {
  //   setEmployee({
  //     id: 123,
  //     name:"Erwin",
  //     email: "erwin@abc.com",
  //     employeeId:"7363728",
  //     dateOfJoining: new Date(),
  //     role: ["Trainee", "L1", "L2", "L3", "CXO"][Math.floor(Math.random() * 5)],
  //     status: ["Active", "Inactive", "Probation"][
  //       Math.floor(Math.random() * 3)
  //     ],
  //     experience: Math.floor(Math.random() * 10),
  //     age: 7,
  //     department: {
  //       name: ["HR", "Full Stack", "Devops", "UI Engineer", "Backend"][
  //         Math.floor(Math.random() * 5)
  //       ],
  //     },
  //     address: {
  //       houseNo: "7773",
  //       line1: "sm street",
  //       line2: "Narikkuni",
  //       pincode: "123456",
  //     },
  //   } as EmployeeType);
  // }, []);


 

  return (
    <main className="edit-employee-page-main">
      <SectionHeader title="Edit Employee" showButton={false} showFilter={false}/>
      <Form
        employee={employee}
        setEmployee={setEmployee}
        handleCancel={cancelClicked}
        handleSave={editClicked}
      />
    </main>
  );
};

export default EditEmployee;