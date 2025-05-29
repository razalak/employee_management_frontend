import "./sectionHeader.css";

type SectionHeaderProps = {
  title: string;
  rightContent?:React.ReactNode;
};

const SectionHeader = ({ title,rightContent }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <h1>{title}</h1>
      <div className="right-content">{rightContent}</div>
    </div>
  );
};

export default SectionHeader;
