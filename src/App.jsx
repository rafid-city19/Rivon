import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Solutions from "./components/Solutions";
import Work from "./components/Work";
import About from "./components/About";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

// Service Pages
import AppDevelopment from "./pages/Services/AppDevelopment";
import WebDevelopment from "./pages/Services/WebDevelopment";
import UIUX from "./pages/Services/UIUX";
import SEODigitalMarketing from "./pages/Services/SEODigitalMarketing";
import BusinessSolutions from "./pages/Services/BusinessSolutions";
import AISolutions from "./pages/Services/AISolutions";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Founder />
        <Services />
        <Solutions />
        <Work />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <LoadingScreen />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* ================= SERVICES ================= */}

        <Route
          path="/services/web-development"
          element={<WebDevelopment />}
        />

        <Route
          path="/services/app-development"
          element={<AppDevelopment />}
        />

        <Route
          path="/services/ui-ux"
          element={<UIUX />}
        />

        <Route
          path="/services/seo-digital-marketing"
          element={<SEODigitalMarketing />}
        />

        <Route
          path="/services/business-solutions"
          element={<BusinessSolutions />}
        />

        <Route
          path="/services/ai-solutions"
          element={<AISolutions />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;