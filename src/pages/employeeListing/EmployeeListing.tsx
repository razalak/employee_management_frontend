import { useNavigate } from "react-router-dom";
import {
  SectionHeader,
  SingleEmpoyeeList,
  EditDeleteButton,
  DeleteConfirm,
} from "../../components";
import "./EmployeeListing.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { EmployeeState } from "../../store/employee/employee.types";
import { useAppSelector } from "../../store/store";
import {
  useDeleteEmployeeMutation,
  useGetEmployeeListQuery,
} from "../../api-service/employees/employees.api";
import type { Employee } from "../../store/employee/employee.types";

export const EmployeeListing = () => {
  const navigate = useNavigate();
  const [deleted, setDeleted] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const myData = useSelector((state: EmployeeState) => state.employees);
  console.log("dispatch data", myData);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;
    if (status != "all") {
      setSearchParams({ status });
    } else {
      setSearchParams();
    }
  };
  const [empIDtoDelete, setempIDtoDelete] = useState("");
  const data = useGetEmployeeListQuery();
  const employees = data.currentData;

  const [deleteEmployee] = useDeleteEmployeeMutation();
  console.log("Fetched employees:", data);

  useEffect(() => {
    if (deleted) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [deleted]);

  // Safely get employees array or empty array

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

  //  const employees = useAppSelector((state) => state.employee.employees);
  //  console.log(employees)

  return (
    <>
      {deleted && (
        <DeleteConfirm
          onClickcancel={() => {
            setDeleted(false);
          }}
          onClickconfirm={async () => {
            if (empIDtoDelete) {
              try {
                console.log("empidsecond",empIDtoDelete)
                 setDeleted(false);
                await deleteEmployee({ id: empIDtoDelete }).unwrap();
                setempIDtoDelete("");
              } catch (error) {
                console.error("Failed to delete employee:", error);
              }
            }
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
            navigate("/employee/create");
          }}
          image="/public/assets/plus-icon.png"
          onchange={handleSelectChange}
        />

        <div className="title">
          <div className="title-component">
            <p>Employee Name</p>
          </div>
          <div className="title-component">
            <p>Employee ID</p>
          </div>
          <div className="title-component">
            <p>Joining Date</p>
          </div>
          <div className="title-component">
            <p>Role</p>
          </div>
          <div className="title-component">
            <p>Status</p>
          </div>
          <div className="title-component">
            <p>Experience</p>
          </div>
          <div className="title-component">
            <p>Action</p>
          </div>
        </div>

        {employees
          ?.filter(
            (employee: Employee) =>
              employee.status.toLowerCase() ===
                searchParams.get("status")?.toLowerCase() ||
              searchParams.get("status") === null
          )
          .map((emp: Employee) => (
            <SingleEmpoyeeList
              name={emp.name}
              id={emp.employeeId}
              joiningdate={emp.joiningdate}
              role={emp.role}
              status={emp.status}
              experience={emp.Experience}
              action={
                <EditDeleteButton
                  onClickedit={() => {
                    navigate(`/employee/edit/${emp.id}`);
                  }}
                  onClickdelete={() => {
                      setempIDtoDelete(`${emp.id}`);
                      console.log("empidfirst",empIDtoDelete)
                    setDeleted(true);
                  }}
                />
              }
              onClick={() => {
                navigate(`/employee/details/${emp.id}`);
              }}
            />
          ))}
      </main>
    </>
  );
};
