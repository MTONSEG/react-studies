import './App.scss';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Settings from './components/Settings/Settings';
import News from './components//News/News';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {
    return (
        <div className='wrapper'>
            <Header />
            <Navbar />
            <div className='main-container'>
                <Routes>
                    <Route path='/profile/*' element={<Profile />} />
                    <Route path='/dialogs/*' element={<DialogsContainer />} />
                    <Route path='/news/*' element={<News />} />
                    <Route path='/music/*' element={<Music />} />
                    <Route path='/settings/*' element={<Settings />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;