import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFoundPage, TopArtistsPage } from "./pages";
import { Dashboard } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/top-artists" element={<TopArtistsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
