import React, { useState, useCallback } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'

import { Navigation } from './components/UI'
import AuthLogin from './pages/Auth/Login'
import AuthRegister from './pages/Auth/Register'
import Overview from './pages/Overview'
import Transactions from './pages/Transactions'
import Budget from './pages/Budget'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import { AuthContext } from './context/auth'

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = useCallback(() => {
        setIsLoggedIn(true)
    }, [])

    const logout = useCallback(() => {
        setIsLoggedIn(false)
    }, [])

    const renderRoutes = () => {
        let routes
        if (isLoggedIn) {
            routes = (
                <Switch>
                    <Route path='/transactions' exact>
                        <Transactions />
                    </Route>
                    <Route path='/budget' exact>
                        <Budget />
                    </Route>
                    <Route path='/settings' exact>
                        <Settings />
                    </Route>
                    <Route path='/profile' exact>
                        <Profile />
                    </Route>
                    <Route path='/' exact>
                        <Overview />
                    </Route>
                </Switch>
            )
        } else {
            routes = (
                <Switch>
                    <Route path='/auth/login' exact>
                        <AuthLogin />
                    </Route>
                    <Route path='/auth/register' exact>
                        <AuthRegister />
                    </Route>
                </Switch>
            )
        }

        return routes
    }

    //   const redirection = () => {
    //     if (isLoggedIn) {
    //       return <Redirect to='/' />
    //     }

    //     return <Redirect to='/auth/login' />
    //   }

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            <div className='App'>
                <Router>
                    {/* {redirection()} */}
                    {isLoggedIn && <Navigation />}
                    <main className={isLoggedIn ? 'main-adjustment' : ''}>
                        {renderRoutes()}
                    </main>
                </Router>
            </div>
        </AuthContext.Provider>
    )
}

export default App
