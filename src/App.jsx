import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages imports
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";

const App = () => {
  return (
    // configures app to be a spa
    <Router>
      {/* conditional routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<List />} />
        <Route path="/hotels/:id" element={<Hotel />} />
      </Routes>
    </Router>
  );
};

export default App;