import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {

	let newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		alert(text);
	}

	return (
		<div className={s.message}>{props.message}
			<div>
				<div>
					<textarea  ref={newPostElement} className={s.textar}>My post</textarea>
		    </div>
			  <div>
				  <button onClick={ addPost } className={s.add_post}>Add post</button>
		    </div>
			</div>
		</div>

	);
}

export default Message;