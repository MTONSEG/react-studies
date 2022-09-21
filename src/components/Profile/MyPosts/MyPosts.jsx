import React from 'react';
import cls from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postElements = props.posts.map((post, index) => <Post imageSrc={post.imageSrc} message={post.message} key={index} />);

	let onAddPost = () => {
		props.addPost()
	}

	let onChangePost = (e) => {
		let text = e.target.value;
		props.updateNewPostText(text);
	}

	return (
		<div className={cls.block}>
			<h1 className={cls.title}>My Posts</h1>
			<form action='#' className={cls.form}>
				<textarea
					className={cls.input}
					onChange={onChangePost}
					value={props.newPostText}>
				</textarea>
				<input
					className={cls.btn}
					type="button"
					value='Send'
					onClick={onAddPost} />
			</form>
			{postElements}
		</div>
	);
}

export default MyPosts;