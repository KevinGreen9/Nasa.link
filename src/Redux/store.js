import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 17},
                {id: 2, message: 'How about travel?', likesCount: 23},
                {id: 3, message: 'Not bad!', likesCount: 10}
            ],
            newPostText: 'react'

        },

        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Roman'},
                {id: 2, name: 'Andrei'},
                {id: 3, name: 'Sergei'},
                {id: 4, name: 'Ivan'},
                {id: 5, name: 'Victor'},
                {id: 6, name: 'Nikita'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How about travel?'},
                {id: 3, message: 'When?'},
                {id: 4, message: 'Tomorrow'},
                {id: 5, message: 'Good idea'},
                {id: 6, message: 'See you'}
            ],
            newMessageBody: ""
        },
        sidebar: {}

    },
    _callSubscriber(state) {
        console.log('state entireTree', state);
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}



export default store;
window.store = store;