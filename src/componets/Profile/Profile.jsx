import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.ukinbound.org/wp-content/uploads/2019/11/Webp.net-resizeimage-2019-12-16T112749.796-875x350.jpg" alt=""/>
            </div>
            <div>
                ava
            </div>
            <MyPosts />

        </div>

    )


}
export default Profile;