interface FeatureFlags {
  [key: string]: boolean;
}

export const featureFlags: FeatureFlags = {
  featureSharedLinkByTelegram: false,
};
