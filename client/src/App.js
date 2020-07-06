import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import ThemeProvider from './components/ThemeProvider';
import Header from './components/header';
import Footer from './components/footer';
import AboutBody from './components/aboutbody';
import Matches from './pages/Matches';
import UpdateProfile from './pages/UpdateProfile';
import CreateProfile from './pages/CreateProfile';
import Login from './pages/Login'

function App() {
  return (
    <ThemeProvider>
    <div>
        <Header>
        </Header>
       <Router>
        <Switch>
          <Route exact path={["/", "/home"]}>
          <AboutBody></AboutBody>
          </Route>
          <Route exact path="/update">
            <UpdateProfile />
          </Route>
          <Route exact path="/create">
            <CreateProfile />
          </Route>
          <Route exact path="/matches">
            <Matches />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
    </Router>
    <Footer></Footer>
    </div>
   </ThemeProvider>
   
  );
}

export default App;
