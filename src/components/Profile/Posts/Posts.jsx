import Post from "./Post/Post";
import React from 'react';
import s from "./Posts.module.css";
import PostContainer from "./Post/PostContainer";



const Posts = (props) => {
  let postRnd = props.state.postsData.map(data => <Post delPost={props.delPost} avatar={data.avatar} name={data.name} message={data.message} />)
  let newPost = React.createRef();
  let addPost = () => {
    let text = newPost.current.value;
    props.addpost(text);
    newPost.current.value = '';
  }
  let onPostChange = () =>{
    let text = newPost.current.value;
    props.onPostChange(text);
  }

  return (
    <div className={s.posts}>
      <div>
        <textarea ref={newPost} value={props.newText} onChange={onPostChange}></textarea>
      </div>
      <button onClick={addPost}>Add post</button>
      {postRnd}
    </div>
  );
}
export default Posts;