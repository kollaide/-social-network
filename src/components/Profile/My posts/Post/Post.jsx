import React from 'react';
import s from './Post.module.css'
const Post = (props) =>{
    return(
    <div className={s.item}>
        <img src="https://avatars.mds.yandex.net/get-zen_doc/987771/pub_5d7561510a451800aee1129d_5d75619f3639e600ac3f0c80/scale_1200" alt="Avatar" />
        {props.message}
        
        <div className='s.like'>
        Like: {props.like}
        </div>
        </div>
    )
}
export default Post