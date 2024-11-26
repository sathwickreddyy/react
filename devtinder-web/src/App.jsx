import {BrowserRouter, Route, Routes} from "react-router";
import Body from "./components/Body.jsx";
import Login from "./components/Login.jsx";
import Profile from "./components/Profile.jsx";
import {Provider} from "react-redux";
import appStore from "./utils/redux/appStore.jsx";
import Feed from "./components/Feed.jsx";

function App() {

  return (
      <>
          <Provider store={appStore}>
              <BrowserRouter basename={"/"}>
                  <Routes>
                      <Route path="/" element={<Body />}>
                          <Route path={"/"} element={<Feed />} />
                          <Route path={"/login"} element={<Login />} />
                          <Route path={"/profile"} element={<Profile />} />
                      </Route>
                  </Routes>
              </BrowserRouter>
          </Provider>
      </>
  )
}

export default App
