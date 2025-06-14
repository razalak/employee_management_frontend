import "./sectionHeader.css";
import { TopButton } from "../topbutton/topbutton";
import { FilterComponent } from "../filterCompnent/fileterComponent";

type SectionHeaderProps = {
  title: string;
  label?:string;
  onClick?: ()=>void;
  showButton:Boolean;
  showFilter:Boolean;
  image?:string;
  onchange?:(event:React.ChangeEvent<HTMLSelectElement>)=>void
};

const SectionHeader = ({ title,label,onClick ,showButton,image,onchange,showFilter}: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <h1>{title}</h1>
      <div className="rightside">
          {showFilter&&<FilterComponent onchange={onchange}/>}
       {image&&showButton && label && onClick&&<TopButton onClick={onClick} label={label} image={image}/>}
       </div>
    </div>
  );
};

export default SectionHeader;
