import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { MissionVision } from "./components/MissionVision";
import { GetInvolved } from "./components/GetInvolved";
// import { Events } from "./components/Events";
import { Contact } from "./components/Contact";
import { Jobs } from "./components/Jobs";
import Footer from "./components/Footer";
import { ScrollToTop } from "./hooks/useScrollToTop";

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
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/jobs"
              element={
                <>
                  <Jobs />
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
