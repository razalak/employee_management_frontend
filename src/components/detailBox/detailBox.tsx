import "./detailBox.css"

type detailBoxtype={
    label:string,
    value:string
}

export const DetailBox=({label: label,value}:detailBoxtype)=>{
    return (
        <div className="data-segment">
        <p className="label">{label}</p>
        <p className="value">{value}</p>
        </div>
    )
}