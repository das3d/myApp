
const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

let initStore = {
    usersData: [
        { id: 1, name: 'Sanya' },
        { id: 2, name: 'Sas' },
        { id: 3, name: 'Sany' },
        { id: 4, name: 'Sasa' }
    ],
    dialogsData: [
        { message: "lorem" },
        { message: "loreasdm" }
    ],
    newMessageArea: ""

}

const messageReducer = (state = initStore, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let data = { message: state.newMessageArea };
            let stateCopy = {...state};
            stateCopy.dialogsData = [...state.dialogsData];
            stateCopy.dialogsData.push(data);
            stateCopy.newMessageArea = '';
            return stateCopy;
        }
        case UPDATE_MESSAGE:{
            let stateCopy = {...state};
            stateCopy.newMessageArea = action.newMessage;
            console.log(action.newMessage);
            return stateCopy;}
        default: return state;
    }
}
export const sendMessageActionCreator = (message) => ({ type: SEND_MESSAGE, messageText: message });
export const updateMessageActionCreator = (message) => ({ type: UPDATE_MESSAGE, newMessage: message });
export default messageReducer;