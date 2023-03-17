import "./App.css";
import Navbarr from "./components/Navbar";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Bookingscreen from "./screens/Bookinscreen";
function App() {
  return (
    <>
      <Navbarr />
      <BrowserRouter>
        <Routes>
          <Route path="/home" exact Component={Homescreen} />
          <Route path="/book/roomid" exact Component={Bookingscreen}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
