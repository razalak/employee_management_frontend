import "./singleEmployeeList.css"

type Listtypes={
    name:string;
    id:string;
    joiningdate:string;
    role:string;
    status:string;
    experience:string;
    action:React.ReactNode;
}
export const SingleEmpoyeeList=({name , id,joiningdate,role,status,experience,action}:Listtypes)=>{
    return (
        <>
               <div className="titles">
                    <div className="title-components"><p className="title-component">{name}</p></div>
                   <div className="title-components"><p className="title-component">{id}</p></div>
                    <div className="title-components"><p className="title-component">{joiningdate} </p></div>
                    <div className="title-components"><p className="title-component">{role}</p></div>
                    <div className="title-components"><p className="title-component">{status}</p></div>
                    <div className="title-components"><p className="title-component">{experience}</p></div>
                    <div className="title-components"><p className="title-component">{action}</p></div>
                </div>
        </>
    )
}