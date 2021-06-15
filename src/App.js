//import logo from './logo.svg';
import './App.css';
import About from './About';
import Login from './components/Login/Login';
import Contact from './Contact';
import Home from './Home';
import HomeContainer from './containers/HomeContainer';
import HeaderContainer from './containers/HeaderContainer';
import LoginContainer from './containers/LoginContainer';
import ProfileContainer from './containers/ProfileContainer';
import ProductsContainer from './containers/ProductsContainer';
import React,{useState} from 'react';
import Protected from './components/Protected';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";


function App() {
  const [data,setData] = useState({name:"Tommy",age:"28"})
  return (
    <>
    
    <Router>
    <HeaderContainer/>
      <Switch>
          
          <Protected path='/' exact component={Home} />
          <Protected path='/about-us' exact component={About}  data={data} />
          <Protected path='/contact-us'  component={Contact}  data={data} />
          <Protected path='/product'  component={ProductsContainer}  data={data} />
          {/* <Route path="/contact-us">
            <Contact name="rahul" data={data}/>
          </Route> */}
          <Route path="/profile">
            <ProfileContainer/>
          </Route>
          <Route path="/login">
            <LoginContainer/>
          </Route>
          {/* <Route path="/">
            <ProductsContainer/>
            <HomeContainer/>     
          </Route> */}
          
      </Switch>
      {/* <button onClick={()=>setData({name:"rahul",age:"31"})}>Update prop</button> */}
    </Router>
    </>
  );
}

export default App;
