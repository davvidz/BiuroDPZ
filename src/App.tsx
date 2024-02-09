import React from "react";
import "./App.scss";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Biuro } from "./components/pages/biuro/biuro";
import { Oferta } from "./components/pages/oferta/oferta";
import { Cennik } from "./components/pages/cennik/cennik";
import { Kontakt } from "./components/pages/kontakt/kontakt";
import i18next from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

i18next.use(initReactI18next).init({
  lng: "en",
  debug: true,
  //fallbackLng: "en",
  resources: {
    en: {
      translation: {
        welcome: "hello world",
      },
    },
    pl: {
      translation: {
        welcome: "Witaj mordo",
      },
    },
  },
});

function App() {
  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <div className="wrapper">
        <h2>{t("welcome")}</h2>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="biuro" element={<Biuro />} />
          <Route path="oferta" element={<Oferta />} />
          <Route path="cennik" element={<Cennik />} />
          <Route path="kontakt" element={<Kontakt />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
