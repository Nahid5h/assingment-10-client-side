import { Outlet } from "react-router-dom";
import "./App.css";
import Navber from "./component/Navber";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <div className="container mx-auto mt-4">
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
