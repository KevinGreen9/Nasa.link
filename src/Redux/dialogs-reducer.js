const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {

    dialogs: [
        {id: 1, name: 'Roman'},
        {id: 1, name: 'Andrei'},
        {id: 1, name: 'Sergei'},
        {id: 1, name: 'Ivan'},
        {id: 1, name: 'Victor'},
        {id: 1, name: 'Nikita'}
    ],
        messages: [
    {id: 1, message: 'Hi'},
    {id: 1, message: 'How about travel?'},
    {id: 1, message: 'When?'},
    {id: 1, message: 'Tomorrow'},
    {id: 1, message: 'Good idea'},
    {id: 1, message: 'See you'}
],
    newMessageBody: ""

}

const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
             return {
                ...state,
                 newMessageBody: action.body
             };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
           return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
           default:
            return state;

    }

}
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;