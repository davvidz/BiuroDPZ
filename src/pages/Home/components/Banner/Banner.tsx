import styles from "./Banner.module.scss";

export function Banner() {
  return (
    <div className="banner-wrapper">
      <div className="banner">
        <div className="banner-item">
          <h3>Zakładanie działalności online</h3>
        </div>
        <div className="divider" />
        <div className="banner-item">
          <h3>Kompleksowa obsługa online</h3>
        </div>
      </div>
    </div>
  );
}
