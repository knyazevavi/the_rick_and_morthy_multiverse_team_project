import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { PageError } from "./pages/404.tsx";
import { LoginForm } from "./components/Sign-in.tsx";
import { RegistrationForm } from "./components/Sign-up.tsx";
import { PrivateRoute } from "./components/PrivateRoute.tsx";
import { PATH } from "./shared/constants/constants.ts";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={PATH.home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PATH.signin} element={<LoginForm />} />
          <Route path={PATH.signup} element={<RegistrationForm />} />
          <Route element={<PrivateRoute />}>
            <Route path={PATH.favorites} element={<>favorite</>} />
            <Route path={PATH.history} element={<>history</>} />
          </Route>

          <Route path={PATH.search} element={<>search</>} />
          <Route path={PATH.character + "/:id"} element={<>character info</>} />

          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
