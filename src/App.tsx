import "./App.css";
import Login from "./pages/login/Login";
// import UncontrolledLogin from "./pages/login/UncontrolledLogin";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import NotFound from "./pages/Notfound/notFound";
import { MainLayout } from "./components";
import { CreateEmployee,EmployeeDetails ,EditEmployee, EmployeeListing} from "./pages";




const Loginrouter=createBrowserRouter(
  [{
    path:"/",
    element:<Login/>
  },
  {
     path:"/login",
    element:<Login/>
  },
  {
    path:"/employee",
    element:<MainLayout/>,
    children:[
      {index:true,element:<CreateEmployee/>},
      {path:"details/:id",element:<EmployeeDetails/>},
      {path:":id/edit",element:<EditEmployee/>},
      {path:"listing",element:<EmployeeListing/>}
    ]
  },
  {
    path:"*",
    element:<NotFound/>
  }]
);

function App() {
    return <>
      <RouterProvider router={Loginrouter}/>
    </>
}

export default App;
