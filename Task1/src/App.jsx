import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ReactProjects from "./pages/ReactProjects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/react-projects" element={<ReactProjects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </main>
      <footer className="bg-gray-100 text-gray-500 text-center py-6">
        © 2024 Bellana Jagadeesh. All rights reserved.
      </footer>
    </Router>
  );
}

export default App;
// Learn more about service workers: https://bit.ly/CRA-PWA
// Learn more about React: https://reactjs.org/docs/getting-started.html