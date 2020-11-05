import item from "./dataSlide";

const SET_SHOW = 'SET_SHOW';

let initialState = {
	dataSlide: item
};
const ServicesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SHOW:
			return {
				...state,

			};
		default:
			return state;
	}
};



export default ServicesReducer;