import React, { useState } from 'react'

const MyAccount = () => {

  console.log('Program Started');

  const [city, setCity] = useState('London');

  // you can keep state in fn comp -- useState()
  const [ accountInfo, setAccountInfo ] = useState({
    name: 'John',
    createdOn: new Date().toISOString()
  });

  const handleNameChange = () =>{
    console.log('into handleNameChange');
    setAccountInfo({
      ...accountInfo, // spread operator
      name: 'Steve'
    });
  }

  return (
    <div>
      <p>City: {city}</p>
      <button onClick={() => {setCity('Chennai')}}>Change City</button>

      <p>Account Name: {accountInfo.name} | Created On : {accountInfo.createdOn}</p>
      <button onClick={handleNameChange}>Change Account Info</button>
    </div>
  )
}

export default MyAccount