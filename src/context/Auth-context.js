import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router';
import {getLocalStorage, setLocalStorage} from '../helpers/localStorage';
import popAlert from '../helpers/popAlert';

export const AuthContext = createContext({
  role: '', 
  jwt: '',
  signIn: (auth)=>{},
  signOut: ()=>{}
});

export function AuthProvider({children}) {

  const navigate = useNavigate()
  
  const [auth, setAuth] = useState(getLocalStorage('auth',{}))
  // console.log(auth);

  const {role, token} = auth
  
  function signIn(auth) {
    setAuth(auth)
    setLocalStorage('auth', auth)
  }

  function signOut() {    
    localStorage.removeItem('jwt')
    setLocalStorage('auth', {})
    setAuth({})
    popAlert(`See you soon`)
    navigate('/')
    setTimeout(()=> window.location.reload(), 1200)
  }

  return (
    <AuthContext.Provider value={{
      role: role, 
      jwt: token,
      signIn: signIn,
      signOut: signOut
    }}>
      <>{children}</>
    </AuthContext.Provider>
  );
}