import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";
import newsReducer from "./news-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
	_state: {

		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you', likesCount: '12'},
				{id: 2, message: 'It is my first post', likesCount: '11'},
				{id: 3, message: 'Yo',likesCount: '11'},
				{id: 4, message: 'Yo',likesCount: '11'},
				{id: 5, message: 'Yo',likesCount: '11'},
				{id: 6, message: 'Yo',likesCount: '11'},
			],
			newPostText: 'Viktoria',
		},
		dialogsPage: {
			messagesData: [
				{id: 1, message: 'Hi'},
				{id: 2, message: 'How is your it-kamasutra?'},
				{id: 3, message: 'Yo'},
				{id: 4, message: 'Yo'},
				{id: 5, message: 'Yo'},
				{id: 6, message: 'Yo'},
			],
			dialogsData: [
				{id: 1, name: 'Dimych'},
				{id: 2, name: 'Andrey'},
				{id: 3, name: 'Sveta'},
				{id: 4, name: 'Sasha'},
				{id: 5, name: 'Viktor'},
				{id: 6, name: 'Valera'},
			],
			newMessageBody: '',
		},
	 newsPage: {
			messageNews: [
				{id: 1, message: 'Hello'},
			],
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log ('State changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer){
		this._callSubscriber = observer;  //наблюдатель паттерн //publisher-subscriber
	},

  dispatch (action) {

	  this._state.profilePage = profileReducer(this._state.profilePage, action);
	  this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
	  this._state.sidebar = sitebarReducer(this._state.sidebar, action);
	  this._state.newsPage = newsReducer(this._state.newsPage, action);

	  this._callSubscriber(this._state);

  }
}

export default store;
window.store = store;