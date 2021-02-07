import { applyMiddleware, combineReducers, createStore } from "redux";
import auth_reducer from "./auth_reducer";
import friendsReducer from "./Friends_reducer";
import messageReducer from "./messagePage_reducer";
import profileReducer from "./profilePage_reducer";
import thunkMiddleware from 'redux-thunk';
let reducers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    friendsPage: friendsReducer,
    auth: auth_reducer


})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;