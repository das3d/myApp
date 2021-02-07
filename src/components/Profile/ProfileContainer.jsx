import { connect } from 'react-redux';
import { addPost, deletePost, updatePostText, getProfile } from './../../redux/profilePage_reducer';
import Profile from './Profile';
import React from 'react';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import { authAPI } from '../../DAL/API';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;

    this.props.getProfile(userId);}
    render() {
      return <Profile {...this.props} />
    }
  }


let mapStateToProps = (state) => {
  return {
    state: state.profilePage,
    newText: state.profilePage.newTextArea,
    profile: state.profilePage.profile
  }
}

export default compose(
  connect(mapStateToProps, { addPost, updatePostText, deletePost, getProfile }),
  withAuthRedirect,
  withRouter
)(ProfileContainer);