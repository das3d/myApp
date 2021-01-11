import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import FriendsContainer from './components/Friends/FriendsContainer'
import MessagesContainer from './components/Messages/MessagesContainer';





const App = (props) => {

  return (
    
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/Profile' render={() => <Profile />}/>
          <Route path='/News' render={() => <News />} />          
          <Route path='/Messages' render={() => <MessagesContainer />} />
          <Route path='/Settings' render={() => <Settings />} />
          <Route path='/Friends' render={() => <FriendsContainer />} />
        </div>
      </div>
    
  );
}



export default App;
