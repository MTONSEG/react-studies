import cls from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';


const isActive = ({ isActive }) => !isActive ? cls.link : `${cls.link} ${cls.selected}`;

const Nav = (props) => {
	return (
		<nav className={cls.block}>
			<ul className={cls.list}>
				<li className={cls.item}>
					<NavLink
						to='/profile'
						className={isActive}
					>
						Profile
					</NavLink>
				</li>
				<li className={cls.item}>
					<NavLink
						className={isActive}
						to='/dialogs'
					>
						Messages
					</NavLink>
				</li>
				<li className={cls.item}>
					<NavLink
						className={isActive}
						to='/news'
					>
						News
					</NavLink>
				</li>
				<li className={cls.item}>
					<NavLink
						className={isActive}
						to='/music'
					>
						Music
					</NavLink>
				</li>
				<li className={cls.item}>
					<NavLink
						to='/settings'
						className={isActive}
					>
						Settings
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Nav;