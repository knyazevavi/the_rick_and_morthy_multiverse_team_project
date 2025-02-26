import { FeatureFlagContext } from "../utils/featureFlag.ts";
export const FeatureFlagProvider = ({ children, featureFlags = {} }) => (
  <FeatureFlagContext.Provider value={featureFlags}>
    {children}
  </FeatureFlagContext.Provider>
);
