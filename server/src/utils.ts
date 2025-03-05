import { featureFlags } from "./constants";

export function isHasKey(key: string): boolean {
  return key in featureFlags;
}
