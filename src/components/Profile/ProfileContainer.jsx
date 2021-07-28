import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import {setProfileUsers} from './../../Redux/profile-reducer'
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userID = this.props.match.params.userId
        if (!userID){
            userID = 10
        }
        profileAPI.getProfiles(userID).then(data => {
            this.props.setProfileUsers(data)})}
    render() {

        return <Profile {...this.props}
        profile={this.props.profile}/>
    }
}
let mapStateToProps = (state)=>{

    return{
        profile:state.profilePage.profile
    }
}

let nameRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileUsers, }) (nameRouter);

