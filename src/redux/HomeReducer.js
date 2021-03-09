const SET_SHOW = 'SET_SHOW';
const SET_BORDER = 'SET_BORDER';

let initialState = {
	addInfo: true,
	border: true,
};
const HomeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SHOW:
			return {
				...state,
				addInfo: action.addInfo
			};
		case SET_BORDER:
			return {
				...state,
				border: action.res
			};
		default:
			return state;
	}
};

export const setShowInfo = (addInfo) => {
	return {
		type: SET_SHOW,
		addInfo
	}
};
export const setStateBorder = res => ({type: SET_BORDER, res});


export default HomeReducer;