import React from 'react';
import styled from 'styled-components';

const Support = () => {
  
  const Heading3 = styled.h3`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Para = styled.p`
    font-size: 15px;
    text-align: center;
    background-color: yellow;
  `;

  // Create a Wrapper component that'll render a <section> tag with some styles
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    text-align:center;
  `;

  const Button = styled.button`
    background-color: red;
    padding: 10px 20px;
    margin-top:10px;
    font-size: 20px;
    border:solid 1px darkred;
  `;

  return(   
    <Wrapper>
       <Heading3>
        Demo of Styled Components -- Refer: https://styled-components.com/
      </Heading3>
      <Heading3>
        Do you need help? Contact Us
      </Heading3>
      <Para>Send a mail to support@example.com</Para>
      <Button>Send Mail Now</Button>
    </Wrapper>
  )
}

export default Support;