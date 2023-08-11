import { createBrowserRouter,RouterProvider } from "react-router-dom";
import ConnectingToServer from "./ConnectingToServer/ConnectingToServer";
import TrainDetails from "./TrainDetails/TrainDetails";
import FullDetails from "./FullDetails/FullDetails";

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
      },{
        path:'/train',
        element:<FullDetails/>
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={route} />;
}
