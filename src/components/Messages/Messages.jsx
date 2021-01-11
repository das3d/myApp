import Dialogs from "./Dialogs/Dialogs";
import s from "./Messages.module.css";
import Users from "./Users/Users";
import React from 'react';

const Messages = (props) => {
    debugger
    let userDA = props.state.usersData.map(data => <Users userName={data.name} userId={data.id} />)
    let messageDA = props.state.dialogsData.map(data => <Dialogs message={data.message} />)
    let sndMess=React.createRef();

    let send = () =>{
        let text = sndMess.current.value;
        props.send(text);
    }
    let updateMessage = () =>{
        let text = sndMess.current.value;
        props.updateMessage(text);
    }

    return (
        <div className={s.messages}>
            <div className={s.fUS}>
                {userDA}
            </div>
            <div className={s.fUSe}>
                {messageDA}
                <div className="areaInp">
                    <textarea ref={sndMess} onChange={updateMessage} value = {props.newMessageArea}></textarea>
                    <div className="">
                    <button onClick={send}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Messages;