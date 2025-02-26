import { createContext, useContext } from "react";

import { FeatureFlags } from "../shared/types/types.ts";

const { VITE_ALLOWED_TELEGRAM_SHARED } = <
  { VITE_ALLOWED_TELEGRAM_SHARED?: string }
>import.meta.env;

export const featureFlags = {
  featureSharedLinkByTelegram: Boolean(VITE_ALLOWED_TELEGRAM_SHARED),
};

export const FeatureFlagContext = createContext<FeatureFlags>({});

export const useFeatureFlags = () => {
  return useContext(FeatureFlagContext);
};
