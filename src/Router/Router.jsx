import { createBrowserRouter } from "react-router";
import MainLayouts from "../MainLayouts/MainLayouts";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import MyService from "../Pages/MyService";
import AddService from "../Pages/AddService";
import MyBookings from "../Pages/MyBookings";
import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import ServiceCardDetails from "../Pages/Card/ServiceCardDetails";
import Profile from "../Pages/Profile/Profile";
import UpdateProfile from "../Pages/Profile/UpdateProfile";
import UpdateService from "../Pages/Card/UpdateService";
import PrivateRoute from "./PrivateRoute";
import LoadingPage from "../Components/Loading/LoadingPage";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/Auth/login",
        element: <Login></Login>,
      },
      { path: "/Auth/register", element: <Register></Register> },
      {
        path: "/my-service",
        element: <MyService></MyService>,
      },
      {
        path: "/add-service",
        element: <AddService></AddService>,
      },
      {
        path: "/service-details/:id",
        element: (
          <PrivateRoute>
            <ServiceCardDetails></ServiceCardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/hero/${params.id}`),
      },
      {
        path: "/update-service/:id",
        element: (
          <PrivateRoute>
            <UpdateService></UpdateService>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/hero/${params.id}`),
      },
      {
        path: "/my-bookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/my-profile",
        element: <Profile></Profile>,
      },
      {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/loading",
        element: <LoadingPage></LoadingPage>,
      },
    ],
  },
]);
export default router;
