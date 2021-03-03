import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";


     const App = (props) => {
       return (
         <div className='app-wrapper'>
             <HeaderContainer />
             <Navbar />
               <div className= 'app-wrapper-content'>
                 <Route path='/dialogs'
                        render={ () => <DialogsContainer /> } />
                 <Route path='/profile/:userId?'
                        render={ () => <ProfileContainer /> } />
                 <Route path='/users'
                        render={ () => <UsersContainer /> } />
                 <Route path="/news">
                   <News />
                 </Route>
                 <Route path="/music">
                   <Music />
                 </Route>
               </div>
           </div>
       );
     }

export default App;
