import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import LiveTime from "./Components/LiveTime/LiveTime";
import Footer from "./Components/Footer/Footer";
import NotificationSystem from "./Pages/Experiments/NotificationSystem/NotificationSystem";
import IndexSystem from "./Pages/Experiments/IndexSystem/IndexSystem";

import ContextSystem from "./Pages/Experiments/ContextSystem/ContextSystem";
import DragAnimation from "./Pages/Experiments/DragAnimation/DragAnimation";
import TestIndexPage from "./Pages/Experiments/TestIndexPage/TestIndexPage";
import BlurTickerPage from "./Pages/Experiments/BlurTickerPage/BlurTickerPage";
// import BlurTickerPage from "./Pages/Experiments/BlurTickerPage/BlurTickerPage";

function App() {
  return (
    <main className="app">
      <Navbar />
      <LiveTime />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/exp/notification-system"
          element={<NotificationSystem />}
        />
        {/* <Route path="/exp/index-system" element={<IndexSystem />} /> */}
        <Route path="/exp/index-system" element={<TestIndexPage />} />
        <Route path="/exp/context-system" element={<ContextSystem />} />
        <Route path="/exp/draggable-system" element={<DragAnimation />} />
        {/* <Route path="/exp/blur-ticker" element={<BlurTickerPage />} /> */}
        <Route path="/exp/blur-ticker" element={<BlurTickerPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
