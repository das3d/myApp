import { NavLink } from "react-router-dom";
import s from "./Users.module.css";
const Users = (props) => {
    return (
        
        <div className={s.users}>
            <NavLink to={'/messages/' + props.userId}>{props.userName}</NavLink>

        </div>

    );
}
export default Users;