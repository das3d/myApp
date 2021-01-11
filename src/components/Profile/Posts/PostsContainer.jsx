import { connect } from 'react-redux';
import { addPostActionCreator, deletePostActionCreator, updateTextActionCreator } from "../../../redux/profilePage_reducer";
import Posts from './Posts';


let mapStateToProps = (state) => {
  return {
    state: state.profilePage,
    newText: state.profilePage.newTextArea
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addpost: (text) => {
      dispatch(addPostActionCreator(text));

    },
    onPostChange: (text) => {
      dispatch(updateTextActionCreator(text));
    },
    delPost: (pst) => {
      dispatch(deletePostActionCreator(pst));
    }
  }
}
const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);
export default PostsContainer;