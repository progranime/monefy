import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'
import { Button } from '../index'
import { AuthContext } from '../../../context/auth'

const Navigation = () => {
  const auth = useContext(AuthContext)
  return (
    <nav className='navigation'>
      <div className='navigation__container'>
        <div className='navigation__profile'>
          <div className='navigation__profile-image-holder'>
            <Link to='/profile'>
              <img
                src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                alt=''
              />
            </Link>
          </div>
          <p className='title'>Jeremy Espinosa</p>
          <p className='subtitle'>jeremyespinosa1995@gmail.com</p>
        </div>
        <ul className='navigation__list'>
          <li>
            <Link to='/'>Overview</Link>
          </li>
          <li>
            <Link to='/transactions'>Transactions</Link>
          </li>
          <li>
            <Link to='/budget'>Budget</Link>
          </li>
          <li>
            <Link to='/settings'>Settings</Link>
          </li>
          <li>
            <Button
              className='btn btn--link'
              onClick={() => {
                auth.logout()
              }}
            >
              Logout
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
