import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { LazyLoading } from "./components/LazyLoading.tsx";
import { PrivateRoute } from "./components/PrivateRoute.tsx";
import { LoginForm } from "./components/Sign-in.tsx";
import { RegistrationForm } from "./components/Sign-up.tsx";
import { PageError } from "./pages/404.tsx";
import { Home } from "./pages/Home.tsx";
import { SearchPage } from "./pages/SearchPage.tsx";
import { PATH } from "./shared/constants/constants.ts";

export const App = () => {
  const { CharacterPage } = LazyLoading.loadComponents();
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
            <Route path={PATH.search} element={<SearchPage />} />
            <Route path={PATH.character + "/:id"} element={<CharacterPage />} />
          </Route>
          <Route path={PATH.page404} element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
