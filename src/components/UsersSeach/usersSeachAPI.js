/*import React from 'react'
import Users from './users';
import * as axios from 'axios';
import { getUsers } from '../../api/api';

class UsersSearch extends React.Component {
    constructor(props) {
        super(props);
    }
    getCurrentPage = (p) => {
        this.props.funcFetching(true)
        
        this.props.currentPage(p)
        
    getUsers(this.props.numberPage, ).then(response => {
        this.props.setUsers(response.data.items)
        })
        this.props.funcFetching(false)
        
    }
    componentDidMount() {
        this.props.funcFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.numberPage}&count=${this.props.pageSize}`,{withCredentials: true}).then(response => {
            this.props.setUsers(response.data.items)
            this.props.totalPage(response.data.totalCount)
            this.props.funcFetching(false)
            
        })
    }
    render() {
        return <Users users={this.props.users}
            pageSize={this.props.pageSize}
            allPagesCount={this.props.allPagesCount}
            numberPage={this.props.numberPage}
            getCurrentPage={this.getCurrentPage}
            follow={this.props.follow}
            unFollow={this.props.unFollow}
            isFetching={this.props.isFetching}
            funcFetching={this.props.funcFetching} />
            
    }
}
export default UsersSearch*/