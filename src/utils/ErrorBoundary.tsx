import * as React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logErrorToMyService(error, info.componentStack, React.captureOwnerStack());
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
