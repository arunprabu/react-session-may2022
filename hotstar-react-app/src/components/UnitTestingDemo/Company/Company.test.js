// arrange ... act.. assert 
import { render, screen } from '@testing-library/react';
import Company, { add } from './Company';

// group of related test cases 
describe('Company', () => {
  
  //test case
  it('should be defined', () => {
    // expect is matcher from JEST. and many apis like toBeDefined are also from JEST
    expect(Company).toBeDefined();
  });

  //test case  
  it('should add perfectly', () => {
    // more than one expectations are needed many times
    expect(add(10, 20)).toEqual(30);
    expect(add(2, 3)).toEqual(5);
  });
  
  it('should have Welcome to My Company text', () => {
    render(<Company />);
    const el = screen.getByTestId('heading2');
    expect(el).toHaveTextContent('Welcome to My Company');
  });

  // how to test props 
  // how to test event handler -- after hooks concept
  // snapshot testing
});

