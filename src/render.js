import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { addMess, addPosts, updateNewMessText, updateNewPostText } from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = (state) => {
	
	root.render(
		<React.StrictMode>
			<BrowserRouter>
				<App
					state={state}
					addMess={addMess}
					addPosts={addPosts}
					updateNewMessText={updateNewMessText}
					updateNewPostText={updateNewPostText}
				/>
			</BrowserRouter>
		</React.StrictMode>
	);
}

