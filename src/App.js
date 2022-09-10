import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';

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