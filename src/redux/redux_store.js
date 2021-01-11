import { combineReducers, createStore } from "redux";
import friendsReducer from "./Friends_reducer";
import messageReducer from "./messagePage_reducer";
import profileReducer from "./profilePage_reducer";
let reducers = combineReducers({
    messagePage: messageReducer,
    profilePage: profileReducer,
    friendsPage: friendsReducer

})
let store = createStore(reducers);
window.store = store;
export default store;