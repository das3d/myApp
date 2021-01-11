import s from "./Dialogs.module.css";
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className="">{props.message}</div>
            
        </div>

    );
}
export default Dialogs;