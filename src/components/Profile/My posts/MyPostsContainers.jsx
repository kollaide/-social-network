import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreate, updatePostMessageActionCreate } from '../../../Redux/profile-reducer';
import MyPosts from './MyPosts';

/*export const MyPostsContainers = (props) =>{
    
    let state = props.store.getState();

let onSendNewPost = () =>{
    props.store.dispatch (addPostActionCreate());

}

let onPostChange = (text) =>{
    let action = updatePostMessageActionCreate(text);
    props.store.dispatch (action);
}

    return(
        <MyPosts posts = {state.profilePage.posts} 
                 onSendNewPost = {onSendNewPost}
                 onPostChange = {onPostChange}
                 newPostMessage = {state.profilePage.newPostMessage}/>
    )
}*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostMessage,
    }
}

let mapDispatchToPops = (dispatch) => {
    return {
        onSendNewPost: () => {
            dispatch(addPostActionCreate())
        },
        onPostChange: (text) => {
            let action = updatePostMessageActionCreate(text);
            dispatch(action)
        }
    }
}

export const MyPostsContainers = connect(mapStateToProps, mapDispatchToPops)(MyPosts);