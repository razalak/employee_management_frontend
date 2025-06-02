import { useNavigate } from "react-router-dom"
import {
  SectionHeader,
  SingleEmpoyeeList,
  EditDeleteButton,
  DeleteConfirm
} from "../../components"
import "./EmployeeListing.css"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import type { EmployeeState } from "../../store/employee/employee.types"

export const EmployeeListing = () => {
  const navigate = useNavigate()
  const [deleted, setDeleted] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams();
  const myData = useSelector((state:EmployeeState)=>state.employees);
  console.log("dispatch data",myData);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;
    if(status!="all"){
    setSearchParams({status});
    }else{
      setSearchParams();
    }
  }

  // const employees = [
  //   {
  //     name: "Erwin",
  //     id: "321",
  //     joiningdate: "09-09-2025",
  //     role: "Developer",
  //     status: "probation",
  //     experience: "3 Years"
  //   },
  //   {
  //     name: "Dias George Thomas",
  //     id: "721",
  //     joiningdate: "09-09-2025",
  //     role: "HR",
  //     status: "probation",
  //     experience: "1 Years"
  //   },
  //   {
  //     name: "Sana",
  //     id: "301",
  //     joiningdate: "08-09-2024",
  //     role: "Intern",
  //     status: "Active",
  //     experience: "0 Years"
  //   },
  //   {
  //     name: "Muhammed Razal AK",
  //     id: "891",
  //     joiningdate: "01-09-2024",
  //     role: "Developer",
  //     status: "inactive",
  //     experience: "8 Years"
  //   },
  //   {
  //     name: "Jibin",
  //     id: "551",
  //     joiningdate: "09-09-2020",
  //     role: "Manager",
  //     status: "Active",
  //     experience: "4 Years"
  //   }
  // ]

  const employees=useSelector((state:EmployeeState)=>state.employees);
  
  return (
    <>
      {deleted && (
        <DeleteConfirm
          onClickcancel={() => {
            setDeleted(false)
          }}
          onClickconfirm={() => {
            setDeleted(false)
          }}
        />
      )}

      <main className="employee-listing">
        <SectionHeader
          title="Employee List"
          showFilter={true}
          showButton={true}
          label="Create Employee"
          onClick={() => {
            navigate("/employee/create")
          }}
          image="/public/assets/plus-icon.png"
          onchange={handleSelectChange}
        />

        <div className="title">
          <div className="title-component"><p>Employee Name</p></div>
          <div className="title-component"><p>Employee ID</p></div>
          <div className="title-component"><p>Joining Date</p></div>
          <div className="title-component"><p>Role</p></div>
          <div className="title-component"><p>Status</p></div>
          <div className="title-component"><p>Experience</p></div>
          <div className="title-component"><p>Action</p></div>
        </div>
        {employees.filter((employee)=>employee.status.toLowerCase()===searchParams.get("status")?.toLowerCase()||searchParams.get("status")===null).map((emp) => (
          <SingleEmpoyeeList
            name={emp.name}
            id={emp.employeeId}
            joiningdate={emp.dateOfJoining}
            role={emp.role}
            status={emp.status}
            experience={`${emp.experience}`}
            action={
              <EditDeleteButton
                onClickedit={() => {
                  navigate(`/employee/edit/${emp.employeeId}`)
                }}
                onClickdelete={() => {
                  setDeleted(true)
                }}
              />
            }
            onClick={()=>{navigate(`/employee/details/:${emp.employeeId}`)}}
          />
        ))}
      </main>
    </>
  )
}
