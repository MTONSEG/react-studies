import cls from './Post.module.css';

const Post = () => {
	return (
		<div className={cls.post}>
			<div className={cls.avatar}>
				<img src='https://picsum.photos/500/300' />
			</div>
			<article className={cls.article}>
				Note: You can prefix paths with ~, as displayed above, to resolve modules from node_modules.
			</article>
		</div>
	);
}

export default Post;