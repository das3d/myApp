import { connect } from 'react-redux';
import { followAC, setDataAC, unFollowAC } from '../../redux/Friends_reducer';
import Friends from './Friends';


let mapStateToProps = (state) =>{
    return{
    friendsData: state.friendsPage.friendsData

    }
}
let mapDispatchToProps = (dispatch) =>{
    return{
        follow: (userId) =>{
            dispatch(followAC(userId));
        },
        unFollow: (userId) =>{
            dispatch(unFollowAC(userId));
        },
        setData: (friends) =>{
            dispatch(setDataAC(friends));
        }
    }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
debugger
export default FriendsContainer;