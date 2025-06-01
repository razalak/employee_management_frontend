import { useNavigate, useParams } from "react-router-dom";
import { SectionHeader } from "../../components";
import "./EmployeeDetails.css";
import { DetailBox } from "../../components/detailBox/detailBox";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const employeeDetails = [
    { label: "Employee Name", value: "Erwin Jose" },
    { label: "Joining Date", value: "12-05-2025" },
    { label: "Experience", value: "0 Years" },
    { label: "Role", value: "Backend" },
    { label: "Status", value: "Probation" },
    { label: "Address", value: "Sm Street 983983939 jnoiifnroifnreirinvrovu" },
    { label: "Employee ID", value: "7363827" },
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
          <DetailBox label={item.label} value={item.value} />
        ))}

        <div className="row-separator"></div>

        {employeeDetails.slice(5).map((item) => (
          <DetailBox label={item.label} value={item.value} />
        ))}
      </div>
    </main>
  );
};
