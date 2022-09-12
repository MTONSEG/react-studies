import cls from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
	let posts = [
		{
			id: 1,
			message: 'To use imports  you specify, you can add',
			imageSrc: 'https://picsum.photos/id/237/200/300'
		},
		{
			id: 2,
			message: 'roject root with the path specified in the SASS_PATH environment variable',
			imageSrc: 'https://picsum.photos/seed/picsum/200/300'
		},
		{
			id: 3,
			message: 'Note: If youre using Flow, override the module.file_ext setting in your .flowconfig so itll recognize .sass or .scss files. You will also need to include the',
			imageSrc: 'https://picsum.photos/200/300'
		},
		{
			id: 4,
			message: 'Windows operating system, separate your paths by semicolons',
			imageSrc: 'https://picsum.photos/200/300/?blur'
		},
		{
			id: 4,
			message: 'Windows operating system, separate your paths by semicolons',
			imageSrc: 'https://picsum.photos/200/300/?blur'
		},
	]

	let postElements = posts
		.map(post => <Post imageSrc={post.imageSrc} message={post.message} />);

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
			{postElements}
		</div>
	);
}

export default MyPosts;