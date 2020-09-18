import React from 'react';
import Nav from './Nav';
import Home from './Home'
import Footer from './Footer'
import './../css/App.css';
import News from './News';
import New_detail from './New_detail';
import Contact from './Contact';
import DieuhuongURL from './../router/DieuhuongURL';


function App() {
  return (
    <div>
     <Nav/>
     <DieuhuongURL/>
     <Footer/>
    </div>
  );
}

export default App;
