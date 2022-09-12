import cls from './Header.module.scss';
import { NavLink } from 'react-router-dom'



const Header = (props) => {
	return (
		<header className={cls.block}>
			<NavLink
				to='/'
			>
				<div className={cls.logoContainer}>
					<img className={cls.logo} src='https://picsum.photos/200/300.jpg' />
				</div>
			</NavLink>
		</header>
	)
}

export default Header;