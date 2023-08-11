import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ConnectingToServer from "./ConnectingToServer/ConnectingToServer";
import TrainDetails from "./TrainDetails/TrainDetails";

const route = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <ConnectingToServer />,
      },
      {
        path: "/connectToServer",
        element: <ConnectingToServer />,
      },
      {
        path:"/trainDetails",
        element:<TrainDetails/>
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={route} />;
}
