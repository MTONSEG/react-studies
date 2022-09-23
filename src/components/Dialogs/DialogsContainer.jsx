import Dialogs from './Dialogs';
import { addMessActionCreator, updateNewMessActionCreator } from '../../redux/dialogs_Reducer';

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    
    let addMess = () => {
        let action = addMessActionCreator();
        props.store.dispatch(action)
    }

    let updateNewMess = (text) => {
        let action = updateNewMessActionCreator(text);
        props.store.dispatch(action)
    }

    return <Dialogs
        addMess={addMess}
        updateNewMess={updateNewMess}
        newMessText={state.newMessText}
        userData={state.userData}
        messageData={state.messageData}
    />
}

export default DialogsContainer;