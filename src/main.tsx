import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { FeatureFlagProvider } from "./components/FeatureFlagProvider.tsx";
import { store } from "./store/store.ts";
import "./styles/index.css";
import { ErrorBoundary } from "./utils/ErrorBoundary.tsx";
import { featureFlags } from "./utils/featureFlag.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <FeatureFlagProvider featureFlags={featureFlags}>
        <Provider store={store}>
          <App />
        </Provider>
      </FeatureFlagProvider>
    </ErrorBoundary>
  </StrictMode>,
);
