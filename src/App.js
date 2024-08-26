import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import GraphicDesign from "./pages/GraphicDesign";
import Digitalmarketing from "./pages/Digitalmarketing";
import Webdevelopment from "./pages/Webdevelopment";
import WindowsDevelopment from "./pages/WindowsDevelopment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <div style={{ marginTop: '60px' }}> {/* Adjust margin-top as needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/graphicDesign" element={<GraphicDesign />} />
          <Route path="/digitalMarketing" element={<Digitalmarketing />} />
          <Route path="/WebDevelopment" element={<Webdevelopment />} />
          <Route path="/WindowsDevelopment" element={<WindowsDevelopment />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
