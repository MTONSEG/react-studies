import cls from '../Profile.module.css'

const mainPic = () => {
	return (
		<div className={cls.picture}>
			<img
				className={cls.img}
				src='https://picsum.photos/1200/300' />
		</div>
	)
}

export default mainPic;

