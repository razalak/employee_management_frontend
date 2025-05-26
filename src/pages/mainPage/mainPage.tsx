import MainLayout from "../../components/mainLayout/mainLayout";
import CreateEmployee from "../createEmployee/createEmployee";
import "./mainPage.css";

const MainPage = () => {
  return (
    <div className="main-page-div">
      <MainLayout>
        <CreateEmployee />
      </MainLayout>
    </div>
  );
};

export default MainPage;
