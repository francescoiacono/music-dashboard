import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotFoundPage, TopArtistsPage } from "./pages";
import { Dashboard } from "./pages";
import { TopTracksPage } from "./pages/TopTracksPage/TopTracksPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/top-artists" element={<TopArtistsPage />} />
        <Route path="/top-tracks" element={<TopTracksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
