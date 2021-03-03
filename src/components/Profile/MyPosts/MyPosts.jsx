import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {

	let postsElement =
		props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={classes.postBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
				</div>
				<div>
					<button onClick={ onAddPost }>
						Add post
					</button>
				</div>
			</div>
			<div className={classes.posts}>
				{ postsElement }
			</div>
		</div>
	);
}

export default MyPosts;