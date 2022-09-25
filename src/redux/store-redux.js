import profileReducer from './profile_Reducer';
import dialogsReducer from './dialogs_Reducer';
import sidebarReducer from './sidebar_Reducer';
import { configureStore } from '@reduxjs/toolkit';


let store = configureStore({
	reducer: {
		profilePage: profileReducer,
		dialogsPage: dialogsReducer,
		sidebar: sidebarReducer
	}
})


export default store;