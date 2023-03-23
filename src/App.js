import {BrowserRouter, Route, Routes} from "react-router-dom"
//Components
import GlobalStyle from "./components/GlobalStyle";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home.js"
import User from "./pages/User"
import Hashtag from "./pages/Hashtag"
//Provider
import Provider from "./contexts/Provider";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>

    <Provider>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/hashtag" element={<Hashtag/>}/>
      </Routes>
    </Provider>

    </BrowserRouter>
  );
}

export default App;
