import { render, screen } from '@testing-library/react';
// arrange 
import App from './App'; //Taking up the component testing

// test case / test spec
it('renders Welcome to React JS text', () => {
  //act 
  render(<App />);
  const element = screen.getByText(/Welcome to React JS/i);
  
  //assert 
  expect(element).toBeInTheDocument();
});
