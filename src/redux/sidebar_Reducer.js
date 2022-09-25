let initialState = {
	friends: [
		{
			name: 'Maksym',
			imageSrc: 'https://picsum.photos/200/300/'
		},
		{
			name: 'Slesar',
			imageSrc: 'https://picsum.photos/200/300/?blur'
		},
		{
			id: 3,
			name: 'Bomyus',
			imageSrc: 'https://picsum.photos/200/300'
		}
	],
};

const sidebarReducer = (state = initialState, action) => {
	return state;
}

export default sidebarReducer;