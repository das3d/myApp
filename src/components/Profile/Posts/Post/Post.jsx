import s from "./post.module.css";
import React from 'react';


const Post = (props) => {
  let post = React.createRef();
  let delPost = () =>{
    let pst = post.current.childElementCount - 1;
    props.delPost(pst);
  }

  return (
    <div className={s.post} ref={post}>
      <div className={s.pers}>
        <img src={props.avatar} />
        <div className={s.nameUser}>{props.name}</div>
      </div>
      <div className={s.item}>{props.message}</div>
      <button className={s.btn} onClick={delPost}>X</button>

    </div>
  );
}
export default Post;