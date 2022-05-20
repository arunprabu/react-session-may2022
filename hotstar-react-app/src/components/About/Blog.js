import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [topicName, setTopicName] = useState('My Blog Demo with useEffect Hook');
  const [publishedDate, setPublishedDate ] = useState(new Date());

  console.log('1. Before useEffect');

  useEffect(() => { 
    // effecs run after every completed render, upon initial render and upon UI update as well
    // it is an alternative to both componentDidMount, componentDidUpdate
    // ideal place for you to make any ajax calls
    console.log('3. Inside useEffect');
    document.title = topicName;

  }, [topicName]); // second arg is dependency -- it is optional
  // if the dep is changed by any means, useEffect callback fn will be called
  // by default useEffect callback will be called once automatically after initial render
  // remove the dep and have empty array then see 

  const handleChangeTopic = () => {
    console.log('4. Inside handleChangeTopic');
    // updating the state
    setTopicName('Demo of UseEffect Hook!');
  }

  const handleUpdateDate = () => {
    setPublishedDate(new Date());
  }

  console.log('2. Before Return');

  return (
    <div>
      <h3>Blog</h3>

      <p>Topic Name: {topicName}</p>
      <button onClick={handleChangeTopic}>Change Topic</button>

      <p>Date: {publishedDate.toISOString()}</p>
      <button onClick={handleUpdateDate}>Update Date</button>
    </div>
  )
}

export default Blog