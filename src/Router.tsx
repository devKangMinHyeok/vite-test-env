import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SWRSuspense from "./swr-suspense/SWRSuspense";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/swr-suspense",
    element: <SWRSuspense />,
  },
]);

export default router;
