import cls from './InfoUser.module.scss';

const InfoUser = () => {
	return (
		<div className={cls.block}>
			<h3 className={cls.userName}>Max P.</h3>
			<ul className={cls.list}>
				<li className={cls.item}>
					Birth: <span>19 February</span>
				</li>
				<li className={cls.item}>
					City: <span>Dnipro</span>
				</li>
				<li className={cls.item}>
					Education: <span>NMetAU</span>
				</li>
				<li className={cls.item}>
					Web Site: <span>puzmax.pp.ua</span>
				</li>
			</ul>
		</div>
	);
}

export default InfoUser;