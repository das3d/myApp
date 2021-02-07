
import { connect } from "react-redux";
import { getAuth, setLogin } from "../../redux/auth_reducer";
import Header from "./Header";
import React from 'react';
import { authAPI, profileAPI } from "../../DAL/API";


class HeaderContainer extends React.Component {
    componentDidMount() {
   
        this.props.getAuth();
    }
    render() {

        return <Header {...this.props} />
    }
}
let mapStateToProps = (state) => ({
    isLogin: state.auth.isLogin,
    login: state.auth.login,
    userAvatar: state.auth.avatar


})
export default connect(mapStateToProps, { getAuth })(HeaderContainer)