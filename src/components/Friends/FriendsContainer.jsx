import { connect } from 'react-redux';
import { followTH, unfollowTH, setCurrentPage, getFriendsInfo, getFriendsData } from '../../redux/Friends_reducer';
import Friends from './Friends';
import React from 'react';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriendsData(this.props.currentPage, this.props.pageSize)
    }
    onChangePage = (pageNumber) => {
        this.props.getFriendsInfo(pageNumber, this.props.pageSize)
    }
    render() {
        return this.props.isLoading ? <Friends
            totalCount={this.props.totalCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
            friendsData={this.props.friendsData}
            followTH={this.props.followTH}
            unfollowTH={this.props.unfollowTH}

        />
            : <img src='https://i.imgur.com/qr4t5ja.gif' />
    }

}
let mapStateToProps = (state) => {
    return {
        friendsData: state.friendsPage.friendsData,
        pageSize: state.friendsPage.pageSize,
        totalCount: state.friendsPage.totalCount,
        currentPage: state.friendsPage.currentPage,
        isLoading: state.friendsPage.isLoading,
    }
}
// let mapDispatchToProps = (dispatch) =>{
//     return{
//         follow: (userId) =>{
//             dispatch(followAC(userId));
//         },
//         unFollow: (userId) =>{
//             dispatch(unFollowAC(userId));
//         },
//         setData: (friends) =>{
//             dispatch(setDataAC(friends));
//         },
//         setPage: (currentPage) =>{
//             dispatch(setCurrentPageAC(currentPage));
//         },
//         setTotalUsersCount: (totalCount) =>{
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsLoading: (isLoading) =>{
//             dispatch(toggleIsLoadingAC(isLoading));
//         },
//     }
// }

export default compose(withAuthRedirect,
    connect(mapStateToProps, {
    followTH,
    unfollowTH,
    setCurrentPage,
    getFriendsInfo,
    getFriendsData,
}))(FriendsContainer)

