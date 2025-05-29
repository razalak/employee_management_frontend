import "./topbutton.css"

type topbuttontype={
    label:string;
    onClick: () => void;
    image:string;
}
export const TopButton=({label,onClick,image}:topbuttontype)=>{
    return (
        <>
        <button className="top-button" onClick={onClick}>
                <div className="round-portion">
                        <img src={image} alt="icon"/>
                </div>
                <div className="label">
                    {label}
                </div>
            </button>
        
        </>
    )
}