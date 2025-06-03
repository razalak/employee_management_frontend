import "./detailBox.css"

type detailBoxtype={
    label?:string,
    value?:string,
    isStatus?:boolean
}

export const DetailBox=({label: label,value,isStatus}:detailBoxtype)=>{
  const bgColor =
    isStatus && value === "ACTIVE"
      ? "#D3F4BE"
      : isStatus && value === "PROBATION"
      ? "#F5ECB8"
      : isStatus && value === "INACTIVE"
      ? "#FFBFBF"
      : "transparent";

    return (
        <div className="data-segment">
        <p className="label">{label}</p>
        <div className="value"><p style={{backgroundColor:bgColor}}>{value}</p></div>
        </div>
    )
}