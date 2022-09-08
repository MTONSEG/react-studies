
const mainUser = () => {
	return (
		<div className='main__user user'>
			<div className='user__avatar'>
				<img className='user__img' src='https://picsum.photos/128' />
			</div>
			<div className='user__info info-user'>
				<h3 className='info-user__name'>Max P.</h3>
				<ul className='info-user__list'>
					<li className='info-user__item-info'>Birth: <span>19 February</span>
					</li>
					<li className='info-user__item-info'>City: <span>Dnipro</span>
					</li>
					<li className='info-user__item-info'>Education: <span>NMetAU</span>
					</li>
					<li className='info-user__item-info'>Web Site: <span>puzmax.pp.ua</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default mainUser;