import Body from "./components/Body";
import { Provider } from "react-redux";
import { applicationStore } from "./utils/redux/applicationStore";

function App() {
    return (
        <Provider store={applicationStore}>
            <Body />
        </Provider>
    );
}

export default App;
