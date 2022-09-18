import React from 'react';
import cls from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postElements = props.posts.map((post, index) => <Post imageSrc={post.imageSrc} message={post.message} key={index} />);

	let newPostText = React.createRef();

	let addPost = () => {
		props.addPosts();
	}

	let onChangePost = () => {
		let text = newPostText.current.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={cls.block}>
			<h1 className={cls.title}>My Posts</h1>
			<form action='#' className={cls.form}>
				<textarea
					className={cls.input}
					ref={newPostText}
					onChange={onChangePost}
					value={props.newPostText}>
				</textarea>
				<input
					className={cls.btn}
					type="button"
					value='Send'
					onClick={addPost} />
			</form>
			{postElements}
		</div>
	);
}

export default MyPosts;