
import s from "./Avatar.module.css";
import ProfileStatus from "./ProfileStatus";

const Avatar = (props) => {
if(!props.profile){
  return <img src='https://i.imgur.com/qr4t5ja.gif'/>;
}
  return (
    <div className = {s.Avatar}>
      <img src={props.profile.photos.large ? props.profile.photos.large :"https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"}/>
      <h1 className ={s.item}>{props.profile.fullName} </h1>
      <ProfileStatus/>
    </div>
    
  );
}
export default Avatar;