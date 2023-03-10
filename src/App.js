import {BrowserRouter, Route, Routes} from "react-router-dom"
//Components
import GlobalStyle from "./components/GlobalStyle";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home.js"
import User from "./pages/User"
import Hashtag from "./pages/Hashtag"
import { PostProvider } from "./contexts/PostContext.js";

function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>

      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<PostProvider><Home/></PostProvider>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/hashtag" element={<Hashtag/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
