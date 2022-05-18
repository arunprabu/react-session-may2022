import React, { Component } from 'react'

class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      hasError: false 
    };
  }

  // to catch errors
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    // side effects should not be caught here
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error);
    console.log(errorInfo);
  }

  render() {

    if(this.state.hasError){
      return (
        <div className='alert alert-danger'>
          <p>Some error occured</p>
          <p>Try again after sometime. If the issue persists, contact Admin.</p>
        </div>
      )
    }else{
      return this.props.children;
    }
   
  }
}

export default ErrorBoundary