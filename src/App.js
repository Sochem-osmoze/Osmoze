import './App.css';
import Footer from './components/Footer'
import Team from './components/Team'
import Owlcarousel from './components/Owlcarousel'
import HomePage from './components/Homepage'
import Announcement from './components/Announcement'


function App() {
  return (
      <div>
        {/*<Owlcarousel />*/}
        {/* <Footer /> */}
        {/*<HomePage />*/}
        <HomePage />
        <Team />
        <Owlcarousel />
        <Announcement />
        <Footer />
      </div>

  );
}

export default App;
