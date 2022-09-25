import Dialogs from './Dialogs';
import { addMessActionCreator, updateNewMessActionCreator } from '../../redux/dialogs_Reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newMessText: state.dialogsPage.newMessText,
        userData: state.dialogsPage.userData,
        messageData: state.dialogsPage.messageData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMess: () => {
            dispatch(addMessActionCreator())
        },
        updateNewMess: (text) => {
            dispatch(updateNewMessActionCreator(text))
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;