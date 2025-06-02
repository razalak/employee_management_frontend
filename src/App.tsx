import "./App.css";
import Login from "./pages/login/Login";
// import UncontrolledLogin from "./pages/login/UncontrolledLogin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/Notfound/notFound";
import { MainLayout } from "./components";
import {
  CreateEmployee,
  EmployeeDetails,
  EditEmployee,
  EmployeeListing,
} from "./pages";
import { Provider } from "react-redux";
import store from "./store/store";

const Loginrouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/employee",
    element: <MainLayout />,
    children: [
      { index: true, element: <EmployeeListing /> },
      { path: "details/:id", element: <EmployeeDetails /> },
      { path: "edit/:id", element: <EditEmployee /> },
      { path: "create", element: <CreateEmployee /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={Loginrouter} />
      </Provider>
    </>
  );
}

export default App;
