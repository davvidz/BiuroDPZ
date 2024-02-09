import "./language-switcher.scss";

export const LanguageSwitcher = () => {
  return (
    <div className="language-switcher">
      <div className="material-symbols-outlined">language</div>
      <select>
        <option>Polski</option>
        <option>English</option>
      </select>
    </div>
  );
};
