import "./deleteConfirm.css"
import Button from "../button/Button";

type buttontype={
    onClickcancel?:()=>void;
    onClickconfirm?:()=>void;
}
export const DeleteConfirm=({onClickcancel,onClickconfirm}:buttontype)=>{
    console.log("yes")
    return (
        <>
        <div className="outerbox">
        <div className="main-box">
            <h2>Are You Sure ?</h2>
            <p>Dou You really want to delete <br/> employee ?</p>
            <div className="buttons">
           <Button label="Confirm" onClick={onClickconfirm} variants="default" />
          <Button label="Cancel" onClick={onClickcancel} variants="outline" />
            </div>
        </div>
        </div>
        </>
    )
}