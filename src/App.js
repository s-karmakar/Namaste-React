import React from "react";
import ReactDOM from "react-dom/client";
// import "../index.css";
import "../index.css";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Footer from "./components/Footer";
import ResturantMenu from "./components/ResturantMenu";
//lazy loading
import { lazy, Suspense } from "react";
const Grocerry = lazy(() => import("./components/Grocerry"));

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resturants/:resID",
        element: <ResturantMenu />,
      },
      {
        path: "/grocerry",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Grocerry />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
