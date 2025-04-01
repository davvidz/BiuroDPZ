import { AppRouter } from "./routes/AppRouter";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();
  return <AppRouter />;
}

export default App;
