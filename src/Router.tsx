import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import SWRSuspense from "./swr-suspense/SWRSuspense";
import RQSuspense from "./react-query-suspense/RQSuspense";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/swr-suspense",
    element: <SWRSuspense />,
  },
  {
    path: "/react-query-suspense",
    element: <RQSuspense />,
  },
]);

export default router;
