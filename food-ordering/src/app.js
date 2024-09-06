import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/class-components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

/**
 * Application Optimization.
 * Optimization 1: Chunking or Code Splitting or Dynamic Bundling
 */

// to acheive the chunking, we need to simulate the lazy loading.
// On Demand Loading
const Grocery = lazy(() => import("./components/Grocery"));
/**
 * @error An error occurred: Error: A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
 */
// To fix above, we need to have some suspense because the browser takes some time to fetch the grocery data when invoked, this will need some delay. So inorder to
// to fix it, we need to add Suspense Component wrapperd over the component.
const AppLayout = () => {
    return (
        <div className='app'>
            <Header />
            <Outlet /> {/** This will be replaced by childs according to path */}
            {/** if path is / */}
            {/* <Body /> */}
            {/** if path is /about */}
            {/* <About /> */}
            {/** if path is /contact */}
            {/* <Contact /> */}
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/grocery",
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <Grocery />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:restaurantId",
                element: <RestaurantMenu />,
            },
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
