import "./App.css";

import HeroSection from "./components/heroSection/HeroSection";
import NavBarT1 from "./components/navBar/type1/NavBarT1";
import HistorySection from "./components/historySection/HistorySection";
import ScheduleSection from "./components/scheduleSection/ScheduleSection";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <HeroSection />
        <NavBarT1 logo={2} />
        <HistorySection />
        <ScheduleSection />
      </Router>
    </>
  );
}

export default App;
