import { createBrowserRouter } from "react-router-dom";

// Main Pages
import Home from "./pages/Home";
import Buy from "./pages/Buy";
import GadgetPage from "./pages/GadgetPage";
// Other Pages
import Transactions from "./pages/Transactions";
import About from "./pages/About";

// Sell Pages
import Model from "./pages/Sell/Model";
import AddressDetails from "./pages/Sell/AddressDetails";
import DeviceDetails from "./pages/Sell/DeviceDetails";
import Upload from "./pages/Sell/Upload";

// Buy Pages
import CheckoutFormA from "./pages/Checkout/CheckoutFormA";
import CheckoutFormB from "./pages/Checkout/CheckoutFormB";
import CheckoutFormC from "./pages/Checkout/CheckoutFormC";
import CheckoutFormD from "./pages/Checkout/CheckoutFormD";

// Layouts
import CheckoutLayout from "./components/CoreComponents/CheckoutLayout";
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
        path: "/buy/gadgets/:id",
        element: <GadgetPage />,
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
  {
    path: "/buy/checkout",
    element: <CheckoutLayout />,
    children: [
      {
        path: "/buy/checkout/formA",
        element: <CheckoutFormA />,
      },
      {
        path: "/buy/checkout/formB",
        element: <CheckoutFormB />,
      },
      {
        path: "/buy/checkout/formC",
        element: <CheckoutFormC />,
      },
      {
        path: "/buy/checkout/formD",
        element: <CheckoutFormD />,
      },
    ],
  },
]);

export default router;
