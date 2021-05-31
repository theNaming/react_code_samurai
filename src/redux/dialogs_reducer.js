const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Sasha' },
        { id: 4, name: 'Valera' },
        { id: 5, name: 'Valeiz' },
        { id: 6, name: 'Flex' }
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Yow is your it-kamasutra' },
        { id: 3, message: 'Is my nama' },
        { id: 4, message: 'Hi' },
        { id: 5, message: 'Hyi' }
    ],
    newMessageBody: ''
};

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
                messages: [...state.messages, { id: 6, message: body }]
            };    
        default: 
            return state;
    }        
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer; 