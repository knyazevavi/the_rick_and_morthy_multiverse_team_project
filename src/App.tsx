import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { LazyLoading } from "./components/LazyLoading.tsx";
import { PrivateRoute } from "./components/PrivateRoute.tsx";
import { PATH } from "./shared/constants/constants.ts";

export const App = () => {
  const {
    Home,
    SearchPage,
    CharacterPage,
    LoginForm,
    RegistrationForm,
    PageError,
  } = LazyLoading.loadComponents();
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
