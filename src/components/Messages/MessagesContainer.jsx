import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageActionCreator } from "../../redux/messagePage_reducer";
import Messages from "./Messages";

let mapStateToProps = (state) =>{
    return{
        state: state.messagePage,
        newMessageArea: state.messagePage.newMessageArea
    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        send: (text) =>{
            let action = sendMessageActionCreator(text);
            dispatch(action);
        },
        updateMessage: (text) =>{
            let action = updateMessageActionCreator(text);
            dispatch(action);
        }
    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;