import "./sectionHeader.css";
import { TopButton } from "../topbutton/topbutton";

type SectionHeaderProps = {
  title: string;
  label?:string;
  onClick?: ()=>void;
  showButton:Boolean;
  image?:string;
};

const SectionHeader = ({ title,label,onClick ,showButton,image}: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <h1>{title}</h1>
       {image&&showButton && label && onClick&&<TopButton onClick={onClick} label={label} image={image}/>}
    </div>
  );
};

export default SectionHeader;
