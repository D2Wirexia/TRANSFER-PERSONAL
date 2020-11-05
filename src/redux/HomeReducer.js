const SET_SHOW = 'SET_SHOW';

let initialState = {
	addInfo: true
};
const HomeReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SHOW:
			return {
				...state,
				addInfo: action.addInfo
			};
		default:
			return state;
	}
};

export const setShowInfoEC = (addInfo) => {
	return {
		type: SET_SHOW,
		addInfo
	}
};


export default HomeReducer;