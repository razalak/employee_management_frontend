import { useNavigate, useParams } from "react-router-dom";
import { SectionHeader } from "../../components";
import "./EmployeeDetails.css";
import { DetailBox } from "../../components/detailBox/detailBox";
import { useGetEmployeeQuery } from "../../api-service/employees/employees.api";

export const EmployeeDetails = () => {
  const { id } = useParams();
 
  console.log("id---",id);
  if(!id){
    return <p>id is undefined</p>
  }
  const empData = useGetEmployeeQuery({id});
  const employee=empData.currentData;
  console.log("Employee data",employee);
  const navigate = useNavigate();

const employeeDetails = [
  { label: "Employee Name", value: employee?.name },
  { label: "Joining Date", value: employee?.joiningdate },
  { label: "Experience", value: `${employee?.Experience} Years` },
  { label: "Role", value: employee?.role },
  { label: "Status", value: employee?.status },
  {
    label: "Address",
    value: `${employee?.address?.line_1 ?? ""} ${employee?.address?.line_2 ?? ""} ${employee?.address?.houseno ?? ""}`
  },
  { label: "Employee ID", value: employee?.employeeId },
];


  return (
    <main className="employee-details-page-main">
      <SectionHeader
        title={`Employee Details of ${id}`}
        showFilter={false}
        showButton={true}
        label="Edit"
        onClick={() => {
          navigate(`/employee/${id}/edit`);
        }}
        image="/public/assets/plus-icon.png"
      />
      <div className="detail-box">
        {employeeDetails.slice(0, 5).map((item) => (
          <DetailBox label={item.label} value={item.value}   isStatus={item.label === "Status"} />
        ))}

        <div className="row-separator"></div>

        {employeeDetails.slice(5).map((item) => (
          <DetailBox label={item.label} value={item.value} />
        ))}
      </div>
    </main>
  );
};
