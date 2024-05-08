import Header from './components/Header'
import Section from './components/Section'
import Project from './components/Project'
import Machine from './components/Machine';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/footer'
import {useGlobalContext} from './Context'
import Activity1 from './components/Activity1';
import Activity2 from './components/Activity2';
import Activity3 from './components/Activity3'

function App() {
  const {showMessagePane, handleContactClick}= useGlobalContext()
  //const nodeMailer = require('nodemailer');

  return (
  
    <Router>
    <div className="App">
    <Header/>
    <Routes>

    <Route path='/' element={<Section/>}>

    </Route>
    
    <Route path='/web' element={<Project/>}></Route>
    <Route path='/machine' element={<Machine/>}></Route>

    <Route path='/activity/1' element={<Activity1/>}></Route>
    <Route path='/activity/2' element={<Activity2/>}></Route>
    <Route path='/activity/3' element={<Activity3/>}></Route>

      {/*<Footer/>*/}
    </Routes>
    <Footer/>
      {showMessagePane&&<Contact/>}
    </div>
    </Router>
   
  );
}

export default App;
