// arrange ... act.. assert 
import { fireEvent, render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
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
    expect(el).toHaveTextContent('Welcome to My Company!');
  });

  // how to test props 
  it('should display the props correctly', () => {
    // act -- render the comp with props to put under test
    render(<Company name="Cognizant Pvt Ltd" />);
    // fetch the element by data-testid 'companyNameEl' 
    // check whether the element has Cognizant Pvt Ltd inside it or not
    // assert 
    expect(screen.getByTestId('companyNameEl'))
      .toHaveTextContent('Cognizant Pvt Ltd');
    
  });

  // how to test event handler -- after hooks concept
  it('should handle event properly and update state', () => {
    // act 
    render(<Company />);
    // finding the element using getByTestId 'companyNameInput'
    const companyNameInputEl =  screen.getByTestId('companyNameInput');

    // now check whether onChange event is working or not 
    // mock fire change event -- with the value 
    fireEvent.change(companyNameInputEl, { target: {value: 'test123'}});

    //assert 
    // finally check if the input is getting the updated data
    expect(companyNameInputEl.value).toBe('test123');
  });

  // snapshot testing
  it('should have right company comp snapshot', () => {
    // to take snapshot --  we need a tool react-test-renderer 
    // npm i react-test-renderer@17.0.2 -D 
    const snapShotTree = renderer.create(<Company name="Cognizant Pvt Ltd" />).toJSON();
    expect(snapShotTree).toMatchSnapshot();
  })

});

