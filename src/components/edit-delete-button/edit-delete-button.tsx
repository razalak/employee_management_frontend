import "./edit-delete-button.css"


export const EditDeleteButton=()=>{
    return (
        <>
        <div className="button-wrap">
            <button><img src="/public/assets/delete.png" alt="delete"/></button>
            <button><img src="/public/assets/edit.png" alt="edit"/></button>
        </div>
        </>
    )
}