import Header from './components/Header'
import Section from './components/Section'
import Project from './components/Project'
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Contact from './components/Contact';
import Footer from './components/footer'
import {useGlobalContext} from './Context'

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
    
    <Route path='/project' element={<Project/>}>

    </Route>

      {/*<Footer/>*/}
    </Routes>
    <Footer/>
      {showMessagePane&&<Contact/>}
    </div>
    </Router>
  );
}

export default App;
