import "./edit-delete-button.css"

type buttontype={
    onClickedit?:()=>void,
    onClickdelete?:()=>void
}

export const EditDeleteButton=({onClickedit,onClickdelete}:buttontype)=>{
    const onEdit=(event: { stopPropagation: () => void })=>{
        event.stopPropagation();
        if(onClickedit)
            onClickedit();
    }

     const onDelete=(event: { stopPropagation: () => void })=>{
        event.stopPropagation();
        if(onClickdelete)
            onClickdelete();
    }
    return (
        <>
        <div className="button-wrap">
            <button onClick={onDelete}><img src="/public/assets/delete.png" alt="delete"/></button>
            <button onClick={onEdit}><img src="/public/assets/edit.png" alt="edit"/></button>
        </div>
        </>
    )
}