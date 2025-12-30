import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Snowfall from "react-snowfall";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Freelance from "./pages/Freelance";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Footer from "./pages/Footer";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <Router>
      <Snowfall color="#82c3d9"/>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Projects />
                <Experience />
                <Testimonials />
                <Resume />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/freelance" element={<Freelance />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
