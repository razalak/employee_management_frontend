import { useNavigate } from "react-router-dom"
import { SectionHeader, SingleEmpoyeeList,EditDeleteButton } from "../../components"
import "./EmployeeListing.css"

export const EmployeeListing=()=>{
    const navigate=useNavigate();


    return (
        <>
            <main className="employee-listing">
                <SectionHeader title="Employee List" showButton={true} label="Create Employee" onClick={()=> {navigate("/employee")}} image="/public/assets/plus-icon.png"/>
                <div className="title">
                   <div className="title-component"><p >Employee Name</p></div>
                    <div className="title-component"><p >Employee ID</p></div>
                    <div className="title-component"><p >Joining Date</p></div>
                    <div className="title-component"><p >Role</p></div>
                    <div className="title-component"><p >Status</p></div>
                    <div className="title-component"><p >Experience</p></div>
                    <div className="title-component"> <p >Action</p></div>
                </div>
                <SingleEmpoyeeList name="Erwin" id="321" joiningdate="09-09-2025" role="Developer" status="probation" experience="3 Years" action={<EditDeleteButton onClickedit={()=>{navigate("/employee/:321/edit")}} onClickdelete={()=>alert("Do you want to delete this?")}/>}/>
                <SingleEmpoyeeList name="Dias George Thomas" id="721" joiningdate="09-09-2025" role="HR" status="probation" experience="1 Years" action={<EditDeleteButton/>}/>
                <SingleEmpoyeeList name="Sana" id="301" joiningdate="08-09-2024" role="Intern" status="Active" experience="0 Years" action={<EditDeleteButton/>}/>
                <SingleEmpoyeeList name="Muhammed Razal AK" id="891" joiningdate="01-09-2024" role="Developer" status="Inactive" experience="8 Years" action={<EditDeleteButton/>}/>
                <SingleEmpoyeeList name="Jibin" id="551" joiningdate="09-09-2020" role="Manager" status="Active" experience="4 Years" action={<EditDeleteButton/>}/>
                 <SingleEmpoyeeList name="Erwin" id="321" joiningdate="09-09-2025" role="Developer" status="probation" experience="3 Years" action={<EditDeleteButton/>}/>
                <SingleEmpoyeeList name="Dias George Thomas" id="721" joiningdate="09-09-2025" role="HR" status="probation" experience="1 Years" action={<EditDeleteButton/>}/>
                <SingleEmpoyeeList name="Sana" id="301" joiningdate="08-09-2024" role="Intern" status="Active" experience="0 Years" action={<EditDeleteButton/>}/>
                <SingleEmpoyeeList name="Muhammed Razal AK" id="891" joiningdate="01-09-2024" role="Developer" status="Inactive" experience="8 Years" action={<EditDeleteButton/>}/>
                <SingleEmpoyeeList name="Jibin" id="551" joiningdate="09-09-2020" role="Manager" status="Active" experience="4 Years" action={<EditDeleteButton/>}/>
            </main>
        </>
    )
}