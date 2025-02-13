import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";  // Import necessary components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"; 
import Contact from "./pages/Contact";  // Import Contact page (if you have it)
import GoverningBody from "./pages/GoverningBody";
import TeamMembers from "./pages/TeamMembers";
import VenuesPage from "./pages/VenuesPage";
import VenueDetailPage from "./pages/VenueDetailPage";
import AcademiesPage from "./pages/AcademiesPage";
import Events from "./pages/Events";
import UpcomingEvents from "./pages/UpcomingEvents";
import EventDetails from "./pages/EventDetails";
const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar will be visible on every page */}

      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page as default */}
        <Route path="/about" element={<AboutUs />} /> {/* AboutUs page route */}

        <Route path="/AcademiesPage" element={<AcademiesPage />} /> {/* AboutUs page route */}

        
        <Route path="/GoverningBody" element={<GoverningBody />} /> {/* AboutUs page route */}
        <Route path="/TeamMembers" element={<TeamMembers />} /> {/* AboutUs page route */}
        <Route path="/VenuesPage" element={<VenuesPage />} />
        <Route path="/venue/:id" element={<VenueDetailPage />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/UpcomingEvents" element={<UpcomingEvents />} />
        <Route path="/contact" element={<Contact />} /> {/* Contact page route */}
        <Route path="/EventDetails" element={<EventDetails />} />
      </Routes>

      <Footer /> {/* Footer will be visible on every page */}
    </Router>
  );
};

export default App;
