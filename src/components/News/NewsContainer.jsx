import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const NewsContainer = (props) => {

/*	let state = props.store.getState().newsPage;
	let newMessageBody = state.newMessageBody;
	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator())
	};
	let onNewMessageChange = (e) => {
   let body = e.target.value;
   props.store.dispatch(updateNewMessageBodyCreator(body))
	};*/
	return (<News />)
}

export default NewsContainer;