import React, { createContext } from 'react';

export  const AuthCntext = createContext(null)

const AuthProvider = ({children}) => {
  let hi = 'hello universe it is working'

  
  const authInfo = {
    hi,
  }


  return (
    <AuthCntext.Provider value={authInfo}>
      {children}
    </AuthCntext.Provider>
  );
};

export default AuthProvider;