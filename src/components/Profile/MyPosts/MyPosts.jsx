import cls from './MyPosts.module.scss';
import Post from './Post/Post';

const MyPosts = (props) => {
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

			<Post 
				imageSrc='https://picsum.photos/id/237/200/300'
				message='To use imports relative to a path you specify, you can add'
			/>
			<Post
				imageSrc='https://picsum.photos/seed/picsum/200/300'
				message='roject root with the path specified in the SASS_PATH environment variable'
			/>
			<Post
				imageSrc='https://picsum.photos/200/300?grayscale'
				message='Note: If youre using Flow, override the module.file_ext setting in your .flowconfig so itll recognize .sass or .scss files. You will also need to include the'
			/>
			<Post
				imageSrc='https://picsum.photos/200/300/?blur'
				message='Windows operating system, separate your paths by semicolons'
			/>
		</div>
	);
}

export default MyPosts;