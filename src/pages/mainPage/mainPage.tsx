import { MainLayout } from "../../components";
import { CreateEmployee } from "../index";
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
