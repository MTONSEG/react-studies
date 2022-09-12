import './App.scss';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Music from './components/Music/Music';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header />
                <Navbar />
                <div className='main-container'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile posts={props.posts}/>} />
                        <Route path='/dialogs/*' element={<Dialogs users={props.users} messages={props.messages}/>} />
                        <Route path='/news/*' element={<News/>} />
                        <Route path='/music/*' element={<Music/>} />
                        <Route path='/settings/*' element={<Settings />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;