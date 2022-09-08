const Nav = () => {
	return (
		<nav className='nav'>
			<ul className='nav__list'>
				<li className='nav__item'>
					<a className='nav__link' href='#'>Profile</a>
				</li>
				<li className='nav__item'>
					<a className='nav__link' href='#'>Messages</a>
				</li>
				<li className='nav__item'>
					<a className='nav__link' href='#'>Video</a>
				</li>
				<li className='nav__item'>
					<a className='nav__link' href='#'>Music</a>
				</li>
			</ul>
		</nav>
	)
}

export default Nav;