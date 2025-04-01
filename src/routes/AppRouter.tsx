import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { routes } from "./routes";
import { Header } from "components/layout/Header/Header";
import { Footer } from "components/layout/Footer/Footer";
import { useScrollToTop } from "hooks/useScrollToTop";
import { LoadingSpinner } from "components/ui/LoadingSpinner/LoadinSpinner";

export const AppRouter = () => {
  useScrollToTop();

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};
