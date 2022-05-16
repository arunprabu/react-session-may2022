import React, { Component } from 'react'

class LifeCycleDemo extends Component {
  constructor(props){
    // if a class comp has constructor -- super method should be called.
    // only if you call super() -- this keyword will be available within the comp
    // constructor will be first one called inside the class comp
    super(props);
    console.log("=========== [LifeCycleDemo.js] - 1. Inside Constructor");

    // ideal place for you to have state -- atleast empty state
    this.state = {
      featureName: '',
      isLoading: true
    }

    this.myTimeout = null;
  }

  // lifecycle hook 
  componentDidMount(){
    // this method will be called only once after the initial rendering
    // upon successful rendering of the JSX -- componentDidMount will be called
    // whenever the comp is coming into view -- componentDidMount will be called
    console.log("=========== [LifeCycleDemo.js] - 3. Inside componentDidMount");
    // ideal place for you to make any ajax calls
    // upon successful/failure ajax call, you can change the state here
    // mocking ajax call with timeout 
    this.myTimeout = setTimeout( () => {
      // assuming that we get the data in 4 sec from rest api backend
      console.log('Inside Timeout');
      // you need to update state only if prev state and new state are diff
      this.setState({
        featureName: 'LifeCycle Hooks',
        isLoading: false
      });
    }, 4000);
  }

  shouldComponentUpdate(nextProps, nextState){
    // when state is updated this method will be called
    // it has to return true or false mandatorily.
    // compare the prev state (this.state) and new state (nextState)
    // if changes are there then, return true or else false 
    console.log("=========== [LifeCycleDemo.js] - 4 Inside shouldComponentUpdate");
    
    return true;
  }

  componentDidUpdate(prevProps, prevState){
    // called immediately after the initial update in JSX
    // NOT Called after initial rendering 
    // Use this as an opportunity to operate on the DOM when the component has been updated.
    // Typical usage (don't forget to compare props) if (this.props.something !== prevProps.something) 
    
    console.log("=========== [LifeCycleDemo.js] - 6. Inside componentDidUpdate"); 
  }

  componentWillUnmount(){
    // whenever the comp goes out of the view.. this will be called
    // ideal for yout to clear intervals / timeouts
    clearTimeout(this.myTimeout);
    console.log("=========== [LifeCycleDemo.js] - 7. Inside componentWillUnmount - Comp Destroyed"); 

  }

  render() {
    // NEVER EVER CHANGE STATE HERE
    // Render method will be called automatically after constuctor
    // for render to be called this comp should extend Component class 

    console.log("=========== [LifeCycleDemo.js] - 2 & 5 Inside Render");
    return (
      <div>
        <h3>{this.state.featureName}</h3>
        {this.state.isLoading? 
          <div className='spinner-border text-primary'></div>
          :
          <div>
            <h4>Learn more about Lifecycle hooks here</h4>
            <a href="https://reactjs.org/docs/react-component.html">Click here to learn more</a>
          </div>
        }
      </div>
    )
  }
}

export default LifeCycleDemo;