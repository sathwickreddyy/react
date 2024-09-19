import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import applicationStore from "./utils/redux/applicationStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/body_components/MainContainer";
import WatchPage from "./components/body_components/WatchPage";

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        children: [
            {
                path: "/",
                element: <MainContainer />,
            },
            {
                path: "/watch",
                element: <WatchPage />,
                
            },
        ],
    },
]);

function App() {
    return (
        <Provider store={applicationStore}>
            <div className='App'>
                <Header />
                <RouterProvider router={appRouter}>
                    <Body />
                </RouterProvider>
            </div>
        </Provider>
    );
}

export default App;

/**
 * Home
 *  Header,
 *
 *    Body
 *     Side Bar,
 *     MainContainer
 *        ButtonList
 *        VideoContainer
 *          VideoCard
 */
