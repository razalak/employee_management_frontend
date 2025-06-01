import type { MouseEventHandler } from "react";
import "./singleEmployeeList.css"
type Listtypes={
    name:string;
    id:string;
    joiningdate:string;
    role:string;
    status:string;
    experience:string;
    action:React.ReactNode;
    onclick?:()=>void;
    onClick?:MouseEventHandler<HTMLDivElement>
}
export const SingleEmpoyeeList=({name ,id,joiningdate,role,status,experience,action,onClick}:Listtypes)=>{
   const chooseColor=(status:string)=>{
     if(status==="probation"){
        return "#F5ECB8";
     }else if(status==="Active"){
        return "#D3F4BE";
     }else{
        return "#FFBFBF";
     }
   }


    return (
        <>
               <div className="titles" onClick={onClick}>
                    <div className="title-components"><p>{name}</p></div>
                   <div className="title-components"><p>{id}</p></div>
                    <div className="title-components"><p>{joiningdate} </p></div>
                    <div className="title-components"><p>{role}</p></div>
                    <div className="title-components" style={{ backgroundColor:chooseColor(status),borderRadius:'20% 30% 30% 20%',paddingRight:'50px', display:'flex',justifyContent:'center' }}><p>{status}</p></div>
                    <div className="title-components"><p>{experience}</p></div>
                    <div className="title-components"  ><p>{action}</p></div>
                </div>
        </>
    )
}