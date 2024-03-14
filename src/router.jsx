import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Buy from "./pages/Buy";
import GadgetPage from "./pages/GadgetPage";
import Checkout from "./pages/Checkout";
import Transactions from "./pages/Transactions";
import About from "./pages/About";
import Model from "./pages/Sell/Model";
import AddressDetails from "./pages/Sell/AddressDetails";
import DeviceDetails from "./pages/Sell/DeviceDetails";
import Upload from "./pages/Sell/Upload";

import DefaultLayout from "./components/CoreComponents/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/sell",
        element: <Home />,
      },
      {
        path: "/sell/address",
        element: <AddressDetails />,
      },
      {
        path: "/sell/brand/model",
        element: <Model />,
      },
      {
        path: "/sell/brand/model/details",
        element: <DeviceDetails />,
      },
      {
        path: "/sell/images-upload",
        element: <Upload />,
      },
      {
        path: "/",
        element: <Buy />,
      },
      {
        path: "/gadgets/:id",
        element: <GadgetPage />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/transactions",
        element: <Transactions />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
    ],
  },
]);

export default router;
