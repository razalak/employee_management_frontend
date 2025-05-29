
import { Button } from "../../components";
import { SectionHeader } from "../../components";
import { SelectInputField } from "../../components";
import { TextInputField } from "../../components";
import "./editEmployee.css";
import { useNavigate } from "react-router-dom";

const EditEmployee = () => {
  const createClicked = () => alert("Created");
  const cancelClicked = () => alert("Cancelled");
  const navigate = useNavigate();
  const logoutClicked = () => {
    localStorage.setItem("IsLoggedIn", "false");
     navigate("/login");
  };

  const departments = ["HR", "Developer", "UI", "UX"];
  const roles = ["HR", "Developer", "UI", "UX"];
  const statuses = ["Active", "Inactive", "Probation"];

  return (
    <main className="create-employee-page-main">
      <SectionHeader title="Edit Employee" showButton={false} />
      <form className="employee-create-form">
        <div className="employee-detail-input-section">
          <TextInputField label="Employee Name" placeholder="Employee Name" />
          <TextInputField label="Joining Date" placeholder="Joining Date" />
          <TextInputField label="Experience (Yrs)" placeholder="Experience" />
          <SelectInputField
            label="Department"
            placeholder="Choose Department"
            name="department"
            values={departments}
          />
          <SelectInputField
            label="Role"
            placeholder="Choose Role"
            name="role"
            values={roles}
          />
          <SelectInputField
            label="Status"
            placeholder="Status"
            name="status"
            values={statuses}
          />
          <div className="multiline-input">
            <TextInputField label="Address" placeholder="Flat No./House No." />
            <TextInputField label="" placeholder="Address Line 1" />
            <TextInputField label="" placeholder="Address Line 2" />
          </div>
          <TextInputField label="Employee ID" placeholder="7398378272" disabled={true}/>
        </div>
        <div className="form-buttons">
          <Button label="Create" onClick={createClicked} variants="default" />
          <Button label="Cancel" onClick={cancelClicked} variants="outline" />
          <Button label="logout" onClick={logoutClicked} variants="outline" />
        </div>
      </form>
    </main>
  );
};

export default EditEmployee;
