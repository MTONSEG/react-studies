import cls from './Post.module.scss';

const Post = (props) => {
	return (
		<div className={cls.post}>
			<div className={cls.avatar}>
				<img src={props.imageSrc} />
			</div>
			<article className={cls.article}>
				{props.message}
			</article>
		</div>
	);
}

export default Post;