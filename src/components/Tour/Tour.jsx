import React, { useContext } from 'react';
import { AuthCntext } from '../AuthProvider/AuthProvider';

const Tour = () => {
  const{hi} = useContext(AuthCntext)
  return (
    <div>
      <h2>This is Tour page{hi}</h2>
    </div>
  );
};

export default Tour;