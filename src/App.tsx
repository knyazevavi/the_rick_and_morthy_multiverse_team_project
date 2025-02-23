import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import PageError from "./pages/404.tsx";
import LoginForm from "./components/Sign-in.tsx";
import RegistrationForm from "./components/Sign-up.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signin" element={<LoginForm />} />
          <Route path="signup" element={<RegistrationForm />} />
          <Route element={<PrivateRoute />}>
            <Route path="favorites" element={<>favorite</>} />
            <Route path="history" element={<>history</>} />
          </Route>

          <Route path="search" element={<>search</>} />
          <Route path="/character/:id" element={<>character info</>} />

          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
