import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    auth.createUserWithEmailAndPassword(email, password)
  }
// to use my server instead of firebase edit code here, only this funciton would need changing for it to work 
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
  return auth.signOut()
  }

  useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    setLoading(false)
    setCurrentUser(user)
  })

  return unsubscribe
}, [])

  const value = {
    currentUser,
    login,
    signup,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
