import React from 'react'
import Navbar from '../navbar/Navbar'
import Main from '../main/Main'
import FeedbackForm from '../form/FeedbackForm'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <FeedbackForm/>
    </div>
  );
}

export default Home