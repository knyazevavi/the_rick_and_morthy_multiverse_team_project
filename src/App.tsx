import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";
import { CharacterPage } from "./pages/CharacterPage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="character/:id" element={<CharacterPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
