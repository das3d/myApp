import { connect } from 'react-redux';
import { deletePostActionCreator } from "../../../../redux/profilePage_reducer";
import Post from './Post';

let mapStateToProps = (state) =>{
  return{
      state: state.profilePage 
  }
}
let mapDispatchToProps = (dispatch) => {
  return{
    delPost: (pst) => {
      
      dispatch(deletePostActionCreator(pst));
    }
  }
}
const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);
export default PostContainer;