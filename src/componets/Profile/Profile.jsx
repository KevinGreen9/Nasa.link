import React from 'react';
import './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {


    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>

    )


}
export default Profile;