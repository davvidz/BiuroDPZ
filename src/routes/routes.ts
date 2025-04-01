import { lazy } from "react";

export const routes = [
  {
    path: "/",
    element: lazy(() => import("../pages/Home/Home")),
  },
  {
    path: "/office",
    element: lazy(() => import("../pages/Office/Office")),
  },
  {
    path: "/offer",
    element: lazy(() => import("../pages/Offer/Offer")),
  },
  {
    path: "/priceList",
    element: lazy(() => import("../pages/PriceList/PriceList")),
  },
  {
    path: "/contact",
    element: lazy(() => import("../pages/Contact/Contact")),
  },
];
