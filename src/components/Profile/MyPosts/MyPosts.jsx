import cls from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={cls.block}>
			<h1 className={cls.title}>My Posts</h1>
			<form action='#' method='POST' className={cls.form}>
				<input
					type='text'
					method='POST'
					className={cls.input}
					placeholder='your news...'
				/>
				<button type='submit' className={cls.btn}>Send</button>
			</form>

			<Post />
			<Post />
			<Post />
			<Post/>
		</div>
	);
}

export default MyPosts;