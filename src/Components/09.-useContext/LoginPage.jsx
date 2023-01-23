import React, { useContext } from 'react'
import { UserContext } from './Context/UserContext'

export const LoginPage = () => {
  
  const {user, setUser} = useContext(UserContext)
    
  return (
    <>
      <h2>LoginPage</h2>
      <hr />
      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button 
        className='btn btn-primary'
        onClick={() => setUser({ id:123, name:'Juan', email: 'juan123@gmail.com'})}
      >
        Add User
      </button>
    </>
  )
}
