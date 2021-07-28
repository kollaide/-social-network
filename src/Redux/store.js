import { dialogsReducer } from "./dialogs-reducer";
import { navbarReducer } from "./navbar-reducer";
import { profileReducer } from "./profile-reducer";

export let store = {
    _callSubscriber() {
    },
    _state: {
        dialogsPage: {
            messages: [
                {message: 'Привет'},
                {message: 'Как дела?'},
                {message: 'Что делаешь?'},
                {message: 'Когда домой?'},
                {message: 'Привет'}
              ],
            dialogs: [
                {name: 'Олег', id: 1},
                {name: 'Вова', id: 2},
                {name: 'Вика', id: 3},
                {name: 'Таня', id: 4},
                {name: 'Ярик', id: 5}
              ],
            avatar: [
                {ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'/>},
                {ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU'/>},
                {ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdppf1lDbWRxFZdW9QfosE0BGsA28ks2jnYcZHl9bFiVtM8RiuZLHjtOKRrL7muVtdcmo&usqp=CAU'/>},
                {ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lEZyYBzqDkDbdnmIEpjn6WQdmQJ-q4AGvsY77GTsB_mac3KisFBfYjEEz4t_Mnx9Ehc&usqp=CAU'/>},
                {ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0uvA1f5EcbvXiN4Cfk-ASQVuViSrFIkT2q5BFxsM0qmTGSFvCnsV2cK0qZwOlGn9_6s&usqp=CAU'/>},
            ],
            addNewMessageToDialog: '',
    
        },
    
        profilePage: {
            posts: [
                {message: 'Hello world!', like: '10'},
                {message: 'I want to learn ReactJS', like: '42'},
                {message: 'Hello Ukraine!', like: '50'},
                {message: 'Fuck you Russia!', like: '242'},
                ],
            newPostMessage: '',
    
        },
        
        navbarPage: {}
    },

    subscribe(observer){
        this._callSubscriber=observer;
    },
    getState (){
    return this._state
    },

    dispatch (action) {
        store._state.profilePage = profileReducer (store._state.profilePage, action);
        store._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action);
        store._state.navbarPage = navbarReducer (this._state.navbarPage, action);

        this._callSubscriber(this._state);
    } 
}



/*addPost () {
    let newPost = {
        message: this._state.profilePage.newPostMessage,
        like: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._callSubscriber(this._state);
},
updatePostMessage(newText){
    this._state.profilePage.newPostMessage = newText;
    
    this._callSubscriber(this._state);
},
addMessageToMessages(){
    let addMessages ={
        message: this._state.dialogsPage.addNewMessageToDialog
    };
    this._state.dialogsPage.messages.push(addMessages);
    this._callSubscriber(this._state);
    },
addNewMessage(newMessage) {
    this._state.dialogsPage.addNewMessageToDialog = newMessage;
    this._callSubscriber(this._state);
},*/

/*let rerenderAllTries = () =>{

};

let state = {
    dialogsPage: {
        messages: [
            {message: 'Привет'},
            {message: 'Как дела?'},
            {message: 'Что делаешь?'},
            {message: 'Когда домой?'},
            {message: 'Привет'}
          ],
        dialogs: [
            {name: 'Олег', id: 1},
            {name: 'Вова', id: 2},
            {name: 'Вика', id: 3},
            {name: 'Таня', id: 4},
            {name: 'Ярик', id: 5}
          ],
        avatar: [
            {ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'/>},
            {ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QFaQyezndgniERWn-5S9oNrdXzK9yALQCj_V384ErrrH7il5bou3nGTREZCPMsoCjGY&usqp=CAU'/>},
            {ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdppf1lDbWRxFZdW9QfosE0BGsA28ks2jnYcZHl9bFiVtM8RiuZLHjtOKRrL7muVtdcmo&usqp=CAU'/>},
            {ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lEZyYBzqDkDbdnmIEpjn6WQdmQJ-q4AGvsY77GTsB_mac3KisFBfYjEEz4t_Mnx9Ehc&usqp=CAU'/>},
            {ava: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO0uvA1f5EcbvXiN4Cfk-ASQVuViSrFIkT2q5BFxsM0qmTGSFvCnsV2cK0qZwOlGn9_6s&usqp=CAU'/>},
        ],
        addNewMessageToDialog: '',

    },

    profilePage: {
        posts: [
            {message: 'Hello world!', like: '10'},
            {message: 'I want to learn ReactJS', like: '42'},
            {message: 'Hello Ukraine!', like: '50'},
            {message: 'Fuck you Russia!', like: '242'},
            ],
        newPostMessage: '',

    }
    
}

export let addPost = () =>{
    let newPost = {
        message: state.profilePage.newPostMessage,
        like: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderAllTries(state);
};

 export let updatePostMessage = (newText) =>{
    state.profilePage.newPostMessage = newText;
    
    rerenderAllTries(state);
}

export let addMessageToMessages = () =>{
    let addMessages ={
        message: state.dialogsPage.addNewMessageToDialog
    };
    state.dialogsPage.messages.push(addMessages);
    rerenderAllTries(state);
    }

export let addNewMessage = (newMessage) =>{
    state.dialogsPage.addNewMessageToDialog = newMessage;
    rerenderAllTries(state);
    }

 export const subscribe = (observer) =>{
    rerenderAllTries=observer;
}



export default state*/