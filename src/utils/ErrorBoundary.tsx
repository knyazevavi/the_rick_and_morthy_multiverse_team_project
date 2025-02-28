import * as React from "react";

import { ErrorBoundaryState } from "../shared/types/types";

export default class ErrorBoundary extends React.Component<
  React.PropsWithChildren<Record<string, never>>,
  ErrorBoundaryState
> {
  constructor() {
    super({});
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught error:", error, info.componentStack);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Что-то пошло не так!</p>
          <p>
            {this.state.error instanceof Error
              ? this.state.error?.message
              : "Неизвестная ошибка"}
          </p>
          <button onClick={this.handleReset}>Попробовать снова</button>
        </div>
      );
    }
    return this.props.children;
  }
}
