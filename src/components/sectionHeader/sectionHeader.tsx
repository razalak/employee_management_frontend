import "./sectionHeader.css";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="section-header">
      <h1>{title}</h1>
    </div>
  );
};

export default SectionHeader;
