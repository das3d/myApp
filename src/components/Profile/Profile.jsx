import Avatar from "./Avatar/Avatar";
import s from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer";
const Profile = (props) => {
  return (
    <main className={s.profile}>
      <Avatar/>
      <PostsContainer />

    </main>
  );
}
export default Profile;