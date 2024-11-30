import "./cennik-zakladka.scss";

interface ZakladkaProps {
  name: string;
  isActive: boolean;
  index: number;
  onClickHandler: (index: number) => void;
}

export const Zakladka = ({
  name,
  isActive,
  index,
  onClickHandler,
}: ZakladkaProps) => {
  const handleClick = () => onClickHandler(index);
  return (
    <div
      className={isActive ? "zakladka-active" : "zakladka"}
      onClick={handleClick}
    >
      {name}
    </div>
  );
};
