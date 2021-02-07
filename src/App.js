import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import FriendsContainer from './components/Friends/FriendsContainer'
import MessagesContainer from './components/Messages/MessagesContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';




  
const App = (props) => {

  return (
    
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/Profile/:userId?' render={() => <ProfileContainer />}/>
          <Route path='/News' render={() => <News />} />          
          <Route path='/Messages' render={() => <MessagesContainer />} />
          <Route path='/Settings' render={() => <Settings />} />
          <Route path='/Friends' render={() => <FriendsContainer />} />
        </div>
      </div>
    
  );
}



export default App;
