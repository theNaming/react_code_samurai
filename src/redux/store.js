import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello, how are you', likesCount: 12 },
                { id: 2, message: 'bay', likesCount: 10 }],
            newPostText: 'it-kamasutra.com'    
        },
        dialogsPage: {
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
        },
        sideBar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {        
        return this._state;  
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer
    },

    dispatch(action) { //{type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);  
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);     

        this._callSubscriber(this._state); 
    }
}

export default store;
window.store = store; 