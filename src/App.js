import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { useContext } from "react";
import UserContext from "./utils/UserContext";
import store from "./utils/store";
import Cart from "./components/Cart";
import { Provider } from "react-redux";

// Lazy Loading / Dynamic Import / Code Splitting / Chunking
const Instamart = lazy(() => import("./components/Instamart"));

/*
    Header 
        - Logo 
        - Nav Items {right side}
        -Cart
    Body
        - Search Bar
        - Restaurant List 
            - Food Items 
                - Image 
                - Name 
                - Rating
                -Cuisine
    Footer 
        - Links
        - Copyright
*/

// React Fragement
// use it as a div alternative when we have to wrap elements
// it will not take div element as a space structure will not include anything
// <React.Fragement>

// Shorthand for React.Fragment
/* <>

   </> 
*/

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

// Used for routing to different URL's
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback=<Shimmer />>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

// All data router objects are passed to this component to render
// your app and enable the rest of the data APIs.
root.render(<RouterProvider router={appRouter} />);
