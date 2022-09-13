import './App.scss';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import Navbar from '../Navbar/Navbar';
import Dialogs from "../Dialogs/Dialogs";
import Settings from '../Settings/Settings';
import News from '../News/News';
import Music from '../Music/Music';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Header />
                <Navbar state={props.state.sidebar}/>
                <div className='main-container'>
                    <Routes>
                        <Route path='/profile/*' element={<Profile state={props.state.profilePage} />} />
                        <Route path='/dialogs/*' element={<Dialogs state={props.state.dialogsPage} />} />
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