import React from 'react';
import { addPostActionCreate, updatePostMessageActionCreate } from '../../../Redux/profile-reducer';
import s from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = (props) =>{



let PostNew = props.posts.map( p =><Post message = {p.message} like = {p.like}/>)



let sendNewPost = () =>{
    props.onSendNewPost();
}

let postChange = (e) =>{
    let text = e.target.value;
    props.onPostChange(text);
}
    return(
        <div className={s.content}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.newPostMessage} onChange={postChange} name="" id="" cols="100" rows="5" placeholder='Введите сообщение'/>
            </div>
            <button onClick={sendNewPost}>Отправить</button>
            <div className={s.posts}>
        {PostNew}            
      </div>
     </div>
    )
}
export default MyPosts

