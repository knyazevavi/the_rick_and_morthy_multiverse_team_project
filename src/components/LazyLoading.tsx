import { lazy } from "react";

import { LAZY_MODULES } from "./../shared/constants/constants";

export const LazyLoading = {
  loadComponents: function () {
    return Object.fromEntries(
      Object.entries(LAZY_MODULES).map(([key, { path, exportName }]) => [
        key,
        lazy(() =>
          import(path).then((module) => ({ default: module[exportName] })),
        ),
      ]),
    );
  },
};
