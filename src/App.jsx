import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import Projects from "./components/pages/Projects.jsx";
import Company from "./components/pages/Company.jsx";
import Contact from "./components/pages/Contact.jsx";
import NewProject from "./components/pages/NewProject";
import Project from "./components/pages/project.jsx";

import Container from "./components/layout/container.jsx";
import Navbar from "./components/layout/navbar.jsx";
import Footer from "./components/layout/footer.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Container>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
