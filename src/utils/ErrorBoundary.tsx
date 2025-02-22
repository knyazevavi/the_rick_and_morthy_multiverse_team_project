import * as React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logErrorToMyService(
      error,
      // Example "componentStack":
      //   in ComponentThatThrows (created by App)
      //   in ErrorBoundary (created by App)
      //   in div (created by App)
      //   in App
      info.componentStack,
      // Only available in react@canary.
      // Warning: Owner Stack is not available in production.
      React.captureOwnerStack()
    );
  }

  render() {
    const { error } = this.state;

    if (error) {
      return (
        <div>
          <p>Something went wrong!</p>
          <p>{error.message}</p>
        </div>
      );
    }
    return this.props.children;
  }
}
