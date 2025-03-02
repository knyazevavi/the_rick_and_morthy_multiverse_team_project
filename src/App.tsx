import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute.tsx";
import { LoginForm } from "./components/Sign-in.tsx";
import { RegistrationForm } from "./components/Sign-up.tsx";
import { PageError } from "./pages/404.tsx";
import { CharacterPage } from "./pages/CharacterPage";
import { Home } from "./pages/Home";
import { SearchPage } from "./pages/SearchPage";
import { Favorites } from "./pages/Favorites.tsx";
import { PATH } from "./shared/constants/constants.ts";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={PATH.home} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PATH.signin} element={<LoginForm />} />
          <Route path={PATH.signup} element={<RegistrationForm />} />
          <Route element={<PrivateRoute />}>
            <Route path={PATH.favorites} element={<Favorites />} />
            <Route path={PATH.history} element={<>history</>} />
          </Route>
          <Route path={PATH.search} element={<SearchPage />} />
          <Route path={PATH.character + "/:id"} element={<CharacterPage />} />
          <Route path={PATH.page404} element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
