import "./block-item.scss";

interface BlockItemProps {
  icon: any;
  title: string;
}

export const BlockItem = ({ icon, title }: BlockItemProps) => {
  return (
    <div className="block-item">
      <div className="icon">{icon}</div>
      <div className="title">{title}</div>
    </div>
  );
};
