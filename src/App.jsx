import About from "./components/pages/About";
import Skills from "./components/pages/Skills";
import Resume from "./components/pages/Resume";
import Contact from "./components/pages/Contact";
import SideBar from "./components/SideBar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex justify-center items-center gap-[20em] mt-[5em]">
        <div className="flex-none w-64">
          <SideBar />
        </div>
        <div className="flex-1 w-150">
          <Routes>
            <Route path="/my-profile" element={<About />} />
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
