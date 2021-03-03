import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const Dialogs = (props) => {

	let state = props.dialogsPage;

	let dialogsElement = state.dialogsData.map(dialog =><DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />);
	let messagesElement = state.messagesData.map(message =><Message message={message.message} key={message.id}/>);
	let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
   props.sendMessage();
  }
  let onNewMessageChange = (e) => {
   let body = e.target.value;
   props.updateNewMessageBody(body);
  }
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{ dialogsElement }
			</div>

			<div className={s.messages}>
				<div>{ messagesElement }</div>
				<div>
					<div><textarea value={newMessageBody}
					               onChange={onNewMessageChange}
					               placeholder='Enter your message' /></div>
					<div><button onClick={onSendMessageClick}>Send </button></div>

				</div>
			</div>
		</div>
	);
}


export default Dialogs;