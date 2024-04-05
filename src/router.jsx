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
import GagdetSummary from "./pages/Sell/GagdetSummary";
import DeviceVariant from "./pages/Sell/DeviceVariant";

// Buy Pages
import CheckoutFormA from "./pages/Checkout/CheckoutFormA";
import CheckoutFormB from "./pages/Checkout/CheckoutFormB";
import CheckoutFormC from "./pages/Checkout/CheckoutFormC";
import CheckoutFormD from "./pages/Checkout/CheckoutFormD";
import UserDetails from "./pages/Checkout/UserDetails";
import Summary from "./pages/Checkout/Summary";
import DeviceDetailsB from "./pages/Sell/DeviceDetailsB";
import DeviceDetailsC from "./pages/Sell/DeviceDetailsC";

// Guest Pages
import Register from "./pages/Guest/Register";
import Login from "./pages/Guest/Login";
import VerifyEmail from "./pages/Guest/VerifyEmail";
import ResetPassword from "./pages/Guest/ResetPassword";
import ResetPasswordB from "./pages/Guest/ResetPasswordB";
import ResendVerificationCode from "./pages/Guest/ResendVerificationCode";

// Layouts
import CheckoutLayout from "./components/CoreComponents/CheckoutLayout";
import DefaultLayout from "./components/CoreComponents/DefaultLayout";
import GuestLayout from "./components/CoreComponents/GuestLayout";
import ChangePassword from "./pages/Auth/ChangePassword";
import Accessories from "./pages/Sell/Accessories";

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
        path: "/sell/phone-variant",
        element: <DeviceVariant />,
      },
      {
        path: "/sell/device-details",
        element: <DeviceDetails />,
      },
      {
        path: "/sell/device-detailsB",
        element: <DeviceDetailsB />,
      },
      {
        path: "/sell/device-detailsC",
        element: <DeviceDetailsC />,
      },
      {
        path: "/sell/phone-accessories",
        element: <Accessories />,
      },
      {
        path: "/sell/images-upload",
        element: <Upload />,
      },
      {
        path: "/sell/gadget-summary",
        element: <GagdetSummary />,
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
      {
        path: "/change-password",
        element: <ChangePassword />,
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
      {
        path: "/buy/checkout/info",
        element: <UserDetails />,
      },
      {
        path: "/buy/checkout/summary",
        element: <Summary />,
      },
    ],
  },
  {
    path: "/guest",
    element: <GuestLayout />,
    children: [
      {
        path: "/guest/register",
        element: <Register />,
      },
      {
        path: "/guest/login",
        element: <Login />,
      },
      {
        path: "/guest/verify-email",
        element: <VerifyEmail />,
      },
      {
        path: "/guest/reset-password",
        element: <ResetPassword />,
      },
      {
        path: "/guest/reset-passwordB",
        element: <ResetPasswordB />,
      },
      {
        path: "/guest/resend-verificationCode",
        element: <ResendVerificationCode />,
      },
    ],
  },
]);

export default router;
