import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import applicationStore from "./utils/redux/applicationStore";

function App() {
    return (
        <Provider store={applicationStore}>
            <div className='App'>
                <Header />
                <Body />
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
