import './App.css';
import Navbar from './components/Navbar/Navbar';
import React, { Suspense } from 'react';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';

import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));



const App = () => {
  return (
    <HashRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>

          <Route path='/dialogs'
            render={withSuspense(DialogsContainer)} />

          <Route path='/profile/:userId?'
            render={withSuspense(ProfileContainer)} />

          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginPage />} />
        </div>
      </div>
    </HashRouter>)
}

export default App;
