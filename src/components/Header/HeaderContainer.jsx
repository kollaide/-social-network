import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setUserData} from './../../Redux/auth-reducer'
import { headerAPI } from '../../api/api';


class HeaderContainer extends React.Component {
    componentDidMount() {
        headerAPI.getHeaders()
        .then(data => {  
         
        if (data.resultCode === 0){
        let {id, email, login} = data.data;
        this.props.setUserData (id, email, login)
        }})
    }
    render(){
        return <Header {...this.props}/>
    
}}

let mapStateToProps = (state)=>{
    
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect (mapStateToProps,{setUserData}) (HeaderContainer)
 