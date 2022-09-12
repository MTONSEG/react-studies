import cls from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
	let postElements = props.posts.map(post => <Post imageSrc={post.imageSrc} message={post.message} />);

	return (
		<div className={cls.block}>
			<h1 className={cls.title}>My Posts</h1>
			<form action='#' method='POST' className={cls.form}>
				<input
					type='text'
					className={cls.input}
					placeholder='your news...'
				/>
				<button type='submit' className={cls.btn}>Send</button>
			</form>
			{postElements}
		</div>
	);
}

export default MyPosts;