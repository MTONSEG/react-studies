import cls from './Navbar.module.scss';

const Nav = () => {
	return (
		<nav className={cls.block}>
			<ul className={cls.list}>
				<li className={cls.item}>
					<a className={cls.link} href='http://puzmax.pp.ua'>Profile</a>
				</li>
				<li className={cls.item}>
					<a className={cls.link} href='http://puzmax.pp.ua'>Messages</a>
				</li>
				<li className={cls.item}>
					<a className={cls.link} href='http://puzmax.pp.ua'>Photos</a>
				</li>
				<li className={cls.item}>
					<a className={cls.link} href='http://puzmax.pp.ua'>Videos</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav;