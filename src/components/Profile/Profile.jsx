import Avatar from "./Avatar/Avatar";
import s from "./Profile.module.css";
import Posts from "./Posts/Posts";
const Profile = (props) => {
  return (
    <main className={s.profile}>
      <Avatar profile={props.profile}/>
      <Posts delPost={props.deletePost} updatePostText={props.updatePostText} addPost={props.addPost} 
      state={props.state} newText={props.newText}/>

    </main>
  );
}
export default Profile;