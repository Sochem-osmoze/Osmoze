import './App.css';
import Footer from './components/Footer'
import Team from './components/Team'
import Owlcarousel from './components/Owlcarousel'
import HomePage from './components/Homepage'
import Announcement from './components/Announcement'
import {Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar'


function App() {
  return (
      <div>
        <Navbar />
        <Switch>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/team" component = {Team}/>
        <Route exact path = "/announcement" component = {Announcement}/>
        </Switch>
        <Footer />
        
      </div>

  );
}

export default App;
