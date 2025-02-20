import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='signin'  element={<>sign-in</>} />
          <Route path='signup'  element={<>signup</>} />
          <Route path='favorite'  element={<>favorite</>} />
          <Route path='search'  element={<>search</>} />
          <Route path='history'  element={<>history</>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
