import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import './index.scss'
import { Button } from '../index'
import { AuthContext } from '../../../context/auth'

const Navigation = () => {
  const [isNavDraweOpen, setIsNavDraweOpen] = useState(false)
  const auth = useContext(AuthContext)

  const navDrawerHandler = () => {
    setIsNavDraweOpen(prevState => !prevState)
  }

  return (
    <>
      <nav className='navigation'>
        <div className='navigation__header'>
          <div className='navigation__header-menu' onClick={navDrawerHandler}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className='navigation__header-logo'>
            <img
              src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
              alt=''
            />
          </div>
        </div>

        <div
          className={`navigation__container ${isNavDraweOpen ? 'active' : ''}`}
        >
          <div className='navigation__profile'>
            <div className='navigation__profile-image-holder'>
              <Link to='/profile' onClick={navDrawerHandler}>
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
              <Link to='/' onClick={navDrawerHandler}>
                Overview
              </Link>
            </li>
            <li>
              <Link to='/transactions' onClick={navDrawerHandler}>
                Transactions
              </Link>
            </li>
            <li>
              <Link to='/budget' onClick={navDrawerHandler}>
                Budget
              </Link>
            </li>
            <li>
              <Link to='/settings' onClick={navDrawerHandler}>
                Settings
              </Link>
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
      <div
        className={`navigation__overlay ${isNavDraweOpen ? 'active' : ''}`}
        onClick={navDrawerHandler}
      ></div>
    </>
  )
}

export default Navigation
