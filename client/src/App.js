import React from 'react';

import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import './App.css';

//import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import BlogsPage from "./Pages/BlogsPage";
import TutorialPage from './Pages/TutorialPage';
import MainNavbar from './Components/Navbar/Navbar';
import MainFooter from './Components/Footer/Footer';
import Post from './Components/Post/Post';


// import Home from './components/pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
// import GuestState from './context/guestContext/GuestState'
import AuthState from './context/authContext/AuthState'
import setToken from './utils/setToken'
import PrivateRoute from './Pages/routing/PrivateRoute'


if (localStorage.token) {
  setToken(localStorage.token);
}

function App() {
  return (

        <AuthState>
          <Router>
            <MainNavbar />
            <Switch>
              <PrivateRoute exact path="/" component={ProfilePage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/blog" component={BlogsPage} />
              <Route path="/blog/:slug" render={Post} />
              <Route exact path="/tutorial-page" component={TutorialPage} />
            </Switch>
            <MainFooter />
          </Router>
          </AuthState>
  );
}

export default App;
