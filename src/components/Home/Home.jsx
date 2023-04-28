import React from 'react';
import Container from './container';
import { useParams } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h2>This is home</h2>
      <Container></Container>
    </div>
  );
};

export default Home;