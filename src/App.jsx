import SoftwareTestingPage from "./pages/SoftwareTesting";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppWrapper from "./components/AppWrapper";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { LuLoaderCircle } from "react-icons/lu";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/courses";

import JavaFullStack from "./pages/JavaFullStack";
import PythonFullStack from "./pages/PythonFullStack";
import MernFullStack from "./pages/MernFullStack";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div>
          <img
            src="https://i.pinimg.com/564x/0d/a8/9c/0da89cd80d1d48baedb06242d9b5c60d.jpg"
            className="w-[250px] h-auto scale-50 animate-slow-bounce"
            alt=""
          />
          <h1 className="w-full text-center font-semibold flex justify-center items-center gap-2">
            Entering Orbit... Hold On{" "}
            <LuLoaderCircle size={20} className="animate-spin duration-1000" />{" "}
          </h1>
        </div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppWrapper />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="courses" element={<Courses />} />
          <Route path="java-full-stack" element={<JavaFullStack />} />
          <Route path="python-full-stack" element={<PythonFullStack />} />
          <Route path="mern-full-stack" element={<MernFullStack />} />
          <Route path="software-testing" element={<SoftwareTestingPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
