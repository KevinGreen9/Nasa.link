import React from 'react';
import s from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.ukinbound.org/wp-content/uploads/2019/11/Webp.net-resizeimage-2019-12-16T112749.796-875x350.jpg"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                ava
            </div>
        </div>
    )
}
export default ProfileInfo;