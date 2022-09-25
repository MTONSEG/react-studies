import cls from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Friends from "./Friends/Friends";
import FriendsContainer from './Friends/FriendsContainer';

const Nav = (props) => {
	const isActive = ({ isActive }) => !isActive ? cls.link : `${cls.link} ${cls.selected}`;

	return (
		<nav className={cls.block}>
			<ul className={cls.list}>
				<li className={cls.item}>
					<NavLink to='/profile' className={isActive}> Profile </NavLink>
				</li>
				<li className={cls.item}>
					<NavLink to='/dialogs' className={isActive}>Messages</NavLink>
				</li>
				<li className={cls.item}>
					<NavLink to='/news' className={isActive}>News</NavLink>
				</li>
				<li className={cls.item}>
					<NavLink to='/music' className={isActive}>Music</NavLink>
				</li>
				<li className={cls.item}>
					<NavLink to='/settings' className={isActive}>Settings</NavLink>
				</li>
			</ul>

			<FriendsContainer/>
		</nav>
	)
}

export default Nav;