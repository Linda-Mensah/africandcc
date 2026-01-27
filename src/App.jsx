import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { MissionVision } from "./components/MissionVision";
import { GetInvolved } from "./components/GetInvolved";
import { Events } from "./components/Events";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Careers } from "./components/Careers";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <MissionVision />
      <Programs />
      <GetInvolved />
      {/* <Events /> */}
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/careers"
              element={
                <>
                  <Careers />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
