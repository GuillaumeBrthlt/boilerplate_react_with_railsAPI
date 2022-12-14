import { observer } from 'mobx-react-lite'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useUserStore } from '../contexts/UserContext'

const Nav = observer(() => {
  const userStore = useUserStore()

  const Logout = () => {
    userStore.logoutUser()
  }

  if (userStore.authenticated) {
    return (
      <div>
        <button type="submit" onClick={Logout}>se déconnecter</button>
      </div>
    )
  } 

  if (!userStore.authenticated) {
    return (
      <div>
        <Link to='/login'>se connecter</Link>
        <Link to='/register'>S'inscrire</Link>
      </div>
    )
  }
})

export default Nav