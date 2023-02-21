import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SideNavbar from "./components/SideNavbar";
import Navbar from "./components/Navbar";
import Category from "./pages/Category";
import NotFound from "./components/NotFound";

function App() {
  const [navbar, setNavbar] = useState(false)
  return (
    <>
      <Navbar setNavbar={setNavbar}/>
      <div className={`fixed transition-all ease-out duration-500 ${navbar ? 'left-0 top-0 w-full h-full z-30': '-left-full'}`}>
        <SideNavbar setNavbar={setNavbar}/>
      </div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/category" element={ <Category/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
    </>
  );
}

export default App;
