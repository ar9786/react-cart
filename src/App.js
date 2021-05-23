//import logo from './logo.svg';
import './App.css';
import About from './About';
import Contact from './Contact';
//import Home from './Home';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [data,setData] = useState({name:"Tommy",age:"28"})
  return (
    <>
    <Router>
      <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
      </nav>
      <Switch>
          <Route path="/about-us">
            <About data={data}/>
          </Route>
          <Route path="/contact-us">
            <Contact name="rahul" data={data}/>
          </Route>
          <Route path="/">
            <HeaderContainer/>
            <HomeContainer />
          </Route>
      </Switch>
      {/* <button onClick={()=>setData({name:"rahul",age:"31"})}>Update prop</button> */}
    </Router>
    </>
  );
}

export default App;
