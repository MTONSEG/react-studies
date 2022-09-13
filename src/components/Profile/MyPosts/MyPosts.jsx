import React from "react";
import cls from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postElements = props.posts.map(post => <Post imageSrc={post.imageSrc} message={post.message} />);

	let newPostElement = React.createRef();

	let addPosts = ()=>{
		let text = newPostElement.current.value;
		alert(text);
	}

	return (
		<div className={cls.block}>
			<h1 className={cls.title}>My Posts</h1>
			<form action='#' className={cls.form}>
				<textarea
					className={cls.input}
					ref={newPostElement}
					placeholder='your news...'>
				</textarea>
				<button
					className={cls.btn}
					onClick={addPosts}
				>Send</button>
			</form>
			{postElements}
		</div>
	);
}

export default MyPosts;