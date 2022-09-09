import cls from './Navbar.module.css';

const Nav = () => {
	return (
		<nav className={cls.nav}>
			<ul className={cls.nav__list}>
				<li className={cls.nav__item}>
					<a className={cls.nav__link} href='http://puzmax.pp.ua'>Profile</a>
				</li>
				<li className={cls.nav__item}>
					<a className={cls.nav__link} href='http://puzmax.pp.ua'>Messages</a>
				</li>
				<li className={cls.nav__item}>
					<a className={cls.nav__link} href='http://puzmax.pp.ua'>Photos</a>
				</li>
				<li className={cls.nav__item}>
					<a className={cls.nav__link} href='http://puzmax.pp.ua'>Videos</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav;