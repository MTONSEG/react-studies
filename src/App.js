import './App.scss';
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from './components/Settings/Settings';
import News from './components//News/News';
import Music from './components/Music/Music';


const App = (props) => {
    return (
        <div className='wrapper'>
            <Header />
            <Navbar state={props.state.sidebar} />
            <div className='main-container'>
                <Routes>
                    <Route
                        path='/profile/*'
                        element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}
                        />} />
                    <Route
                        path='/dialogs/*'
                        element={<Dialogs
                            store={props.store}
                            dispatch={props.dispatch}
                        />} />

                    <Route
                        path='/news/*'
                        element={<News />} />
                    <Route
                        path='/music/*'
                        element={<Music />} />
                    <Route
                        path='/settings/*'
                        element={<Settings />} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}

export default App;