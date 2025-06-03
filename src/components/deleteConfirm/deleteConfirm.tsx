import "./deleteConfirm.css"
import Button from "../button/Button";
import { useDeleteEmployeeMutation } from "../../api-service/employees/employees.api";

type buttontype={
    onClickcancel?:()=>void;
    onClickconfirm?:()=>void;
    type?: "submit" | "reset" | "button" | undefined;
}
export const DeleteConfirm=({onClickcancel,onClickconfirm,type}:buttontype)=>{
    console.log("yes")
    return (
        <>
        <div className="outerbox" >
        <div className="main-box">
            <h2>Are You Sure ?</h2>
            <p>Dou You really want to delete <br/> employee ?</p>
            <div className="buttons">
           <Button label="Confirm" type="button" onClick={onClickconfirm} variants="default" />
          <Button label="Cancel" type="button" onClick={onClickcancel} variants="outline" />
            </div>
        </div>
        </div>
        </>
    )
}