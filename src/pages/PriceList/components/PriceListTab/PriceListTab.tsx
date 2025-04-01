import styles from "./PriceListTab.module.scss";

interface ZakladkaProps {
  name: string;
  isActive: boolean;
  index: number;
  onClickHandler: (index: number) => void;
}

export function PriceListTab({
  name,
  isActive,
  index,
  onClickHandler,
}: ZakladkaProps) {
  const handleClick = () => onClickHandler(index);
  return (
    <div
      className={isActive ? "zakladka-active" : "zakladka"}
      onClick={handleClick}
    >
      {name}
    </div>
  );
}
