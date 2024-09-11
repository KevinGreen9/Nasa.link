import React from 'react';
import s from './../Dialogs.module.css';



const Message = (props) => {
    let newMessages = React.createRef ();


    let addPost = () => {
        let text = newMessages.current.value;
        alert (text);
    }
    return (
        <div>
            <div>

            </div>
            <div className={s.dialogs}>
                <ul>
                    <li>{props.message}</li>
                </ul>
            </div>
        </div>
    )
}


export default Message