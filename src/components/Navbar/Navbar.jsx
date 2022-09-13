import cls from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Friends from "./Friends/Friends";

const Nav = (props) => {
	const isActive = ({ isActive }) => !isActive ? cls.link : `${cls.link} ${cls.selected}`;

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
			<Friends users={props.state.friends}/>
		</nav>
	)
}

export default Nav;