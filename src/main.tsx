import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App.tsx";
import { FeatureFlagProvider } from "./components/FeatureFlagProvider.tsx";
import { persistor, store } from "./store/store.ts";
import "./styles/index.css";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import { featureFlags } from "./utils/featureFlag.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <FeatureFlagProvider featureFlags={featureFlags}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </FeatureFlagProvider>
    </ErrorBoundary>
  </StrictMode>,
);
