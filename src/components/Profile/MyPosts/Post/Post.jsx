import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
   
    return (

        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62givkqM3jJOrOdWzqSJ3hWOeExSwxVEEBg&usqp=CAU' /" alt="" />
            {props.message}
            <div>
                <span>LiKe</span>
                {props.likesCount}
            </div>
        </div>

    )
}

export default Post;