import {combineReducers, createStore} from "redux";
import HomeReducer from "./HomeReducer";
import ServicesReducer from "./ServicesReducer";

let reducers = combineReducers({
	homePage: HomeReducer,
	servicesPage: ServicesReducer
});
let store = createStore(reducers);

export default store;