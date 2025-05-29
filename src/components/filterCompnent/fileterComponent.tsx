import "./filterComponent.css"

type selecttype={
    onchange?:(event:React.ChangeEvent<HTMLSelectElement>)=>void;
}
export const FilterComponent=({onchange}:selecttype)=>{
    return (
        <>
          <div className="mainbox">
            <div className="labelcontent"><p>Filer By</p></div>
            <div className="dropdownbar">
            <select id="dropdown" onChange={onchange}>
         <option value="all">All</option>
         <option value="probation">probation</option>
         <option value="inactive">Inactive</option>
         <option value="Active">Active</option>
           </select>
           </div>
          </div>
        </>
    )
}