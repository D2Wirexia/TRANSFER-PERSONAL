import item from "./dataSlide";

const NEXT = 'NEXT';
const PREV = 'PREV';
const SET_ITEM_SALIDER = 'SET_ITEM_SALIDER';

let initialState = {
	dataSlide: item,
	itemSlider: 0,
};
const ServicesReducer = (state = initialState, action) => {
	switch (action.type) {
		case NEXT:
			return {
				...state,
				itemSlider: state.itemSlider + 1
			};
		case PREV:
			return {
				...state,
				itemSlider: state.itemSlider - 1
			};
		case SET_ITEM_SALIDER:
			return {
				...state,
				itemSlider: action.num
			};
		default:
			return state;
	}
};

export const nextBtn = () => {
	return{
		type: NEXT
	}
};
export const prevBtn = () => {
	return{
		type: PREV
	}
};
export const setItemSlider = (num) => {
	return{
		type: SET_ITEM_SALIDER,
		num
	}
};


export default ServicesReducer;