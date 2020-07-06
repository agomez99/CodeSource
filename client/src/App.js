import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BlogsPage from "./Pages/BlogsPage";
import TutorialPage from "./Pages/TutorialPage";
import NoPage from "./Pages/NoPage/NoPage";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AuthState from "./context/authContext/AuthState";
import setToken from "./utils/setToken";
import Toggle from "../src/Components/Toggle";
import MainNavbar from "./Components/Navbar/Navbar";
import Post from "./Components/Post/Post";
import { lightTheme, darkTheme } from "../src/Components/theme";
import { GlobalStyles } from "../src/Components/global";
import { useDarkMode } from "../src/Components/DarkMode";
import "./App.css";

if (localStorage.token) {
  setToken(localStorage.token);
}

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <AuthState>
        <Router>
          <GlobalStyles />
          <MainNavbar />
            <label className="toggle-label"> {theme === "light" ? "light mode" : "dark mode"}!</label>
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/blog" component={BlogsPage} />
            <Route path="/blog/:slug" render={Post} />
            <Route exact path="/tutorial-page" component={TutorialPage} />
            <Route component={NoPage} />
          </Switch>
        </Router>
      </AuthState>
    </ThemeProvider>
  );
}

export default App;
