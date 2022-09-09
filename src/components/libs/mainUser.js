import cls from '../Profile.module.css';

const mainUser = () => {
	return (
		<div className={cls.user}>
			<div className={cls.avatar}>
				<img
					className={cls.avatarFile} src='https://picsum.photos/128' 
				/>
			</div>
			<div className={`${cls.user__info} ${cls.info_user}`}>
				<h3 className={cls.info_user__name}>Max P.</h3>
				<ul className={cls.list}>
					<li className={cls.info_user__item_info}>Birth: <span>19 February</span>
					</li>
					<li className={cls.info_user__item_info}>City: <span>Dnipro</span>
					</li>
					<li className={cls.info_user__item_info}>Education: <span>NMetAU</span>
					</li>
					<li className={cls.info_user__item_info}>Web Site: <span>puzmax.pp.ua</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default mainUser;