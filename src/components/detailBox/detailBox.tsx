import "./detailBox.css"

type detailBoxtype={
    label:string,
    value:string
}

export const DetailBox=({label: label,value}:detailBoxtype)=>{
//     const chooseColor=(label:string)=>{
//      if(label==="probation"){
//         return "#F5ECB8";
//      }else if(status==="Active"){
//         return "#D3F4BE";
//      }else{
//         return "#FFBFBF";
//      }
//    }

    return (
        <div className="data-segment">
        <p className="label">{label}</p>
        <p className="value" >{value}</p>
        </div>
    )
}