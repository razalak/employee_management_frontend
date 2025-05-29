import "./edit-delete-button.css"

type buttontype={
    onClickedit?:()=>void,
    onClickdelete?:()=>void
}

export const EditDeleteButton=({onClickedit,onClickdelete}:buttontype)=>{
    return (
        <>
        <div className="button-wrap">
            <button onClick={onClickdelete}><img src="/public/assets/delete.png" alt="delete"/></button>
            <button onClick={onClickedit}><img src="/public/assets/edit.png" alt="edit"/></button>
        </div>
        </>
    )
}