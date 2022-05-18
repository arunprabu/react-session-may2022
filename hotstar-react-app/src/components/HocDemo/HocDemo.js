import React from 'react';
import ErrorBoundary from '../../containers/ErrorBoundary';
import applyStyles from '../../hoc/applyStyles';
import Bye from './Bye';
import Calculator from './Calculator';
import Hello from './Hello';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

// this example will introduce both hoc and error boundary 
const HocDemo = () => {
  return (
    <div className="container pt-3">
      <h1>HOC Demo & Error Boundary</h1>
      <StyledHello name="John"></StyledHello>
      <hr/>
      <StyledBye msg="see you later!"></StyledBye>
      <hr/>

      <ErrorBoundary>
        <Calculator />
      </ErrorBoundary>
    </div>
  )
}

export default HocDemo