import cls from './Header.module.scss'

const Header = () => {
	return (
		<header className={cls.block}>
			<img className={cls.logo} src='https://picsum.photos/70' />
		</header>
	)
}

export default Header;