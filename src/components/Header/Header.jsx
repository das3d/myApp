import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) =>{
    return(
        <header className={s.header} >
        <img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
        <div className={s.loginBlock}>
          {props.isLogin ? <div className={s.user}>
            <div className="loginText">
            {props.login}
            </div>
            <NavLink to='/Profile'><img src={props.userAvatar ? props.userAvatar:"https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" }/></NavLink>
          </div>
          : <NavLink to={'/login'}>Login</NavLink>}
        </div>
        
      </header>
    );
}
export default Header;