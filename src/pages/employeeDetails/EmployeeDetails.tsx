import { useNavigate, useParams } from "react-router-dom";
import { SectionHeader, TopButton } from "../../components";
import "./EmployeeDetails.css";
import { DetailBox } from "../../components/detailBox/detailBox";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  return (
    <main className="employee-details-page-main">
      <SectionHeader title={`Employee Details of ${id}`} showButton={true} label="Edit" onClick={()=> {navigate("/employee/edit")}} image="/public/assets/plus-icon.png"/>
    <div className="detail-box">
  <DetailBox label="Employee Name" value="Erwin Jose" />
  <DetailBox label="Joining Date" value="12-05-2025" />
  <DetailBox label="Experience" value="0 Years" />
  <DetailBox label="Role" value="Backend" />
  <DetailBox label="Status" value="Probation" />
   <div className="row-separator"></div>
  <DetailBox label="Address" value="Sm Street 983983939 jnoiifnroifnreirinvrovu" />
  <DetailBox label="Employee ID" value="7363827" />
</div>
    </main>
  );
};



