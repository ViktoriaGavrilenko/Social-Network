import React from 'react';
import classes from './Post.module.css';


const Post = (props) => {
	return (
				<div className={classes.item}>
					<img src=' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNplTWk2suGea3AcNZ-nzKJVrLX9mL0SGOmA&usqp=CAU' />;
					{props.message}
					<div>
						<span>Like</span> {props.likesCount}
					</div>
				</div>
	);
}

export default Post;