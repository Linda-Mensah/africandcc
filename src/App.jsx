import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { MissionVision } from "./components/MissionVision";
import { GetInvolved } from "./components/GetInvolved";
import { Events } from "./components/Events";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { VolunteerContainer } from "./components/VolunteerContainer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <MissionVision />
      <Programs />
      <GetInvolved />
      <Events />
      {/* <Store /> */}
      <Contact />
      {/* <VolunteerContainer /> */}
      <Footer />
    </div>
  );
}
