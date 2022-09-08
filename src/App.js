import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <Profile />
      <Footer/>
    </div>
  );
}

export default App;