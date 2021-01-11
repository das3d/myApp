import messageReducer from "./messagePage_reducer";
import profileReducer from "./profilePage_reducer";

let store = {
    _state: {
        messagePage: {
            usersData: [
                { id: 1, name: 'Sanya' },
                { id: 2, name: 'Sas' },
                { id: 3, name: 'Sany' },
                { id: 4, name: 'Sasa' }
            ],
            dialogsData: [
                { message: "lorem" },
                { message: "loreasdm" },
                { message: "rtrtrt" },
                { message: "lasdorem" }

            ],
            newMessageArea: ""

        },
        profilePage: {
            avatarData: [
                { name: "", avatar: '' }

            ],
            postsData: [
                {
                    avatar: "https://sun9-5.userapi.com/impg/j0o8YzgFqJKstJ42Ksz5R2537t8KwG0B4wuW-Q/Q_FUy1Sp1T0.jpg?size=200x0&quality=96&crop=124,1,810,810&sign=43e64b3b3ba87e0598bf02295b4fb7b9&ava=1",
                    message: 'trtebf', name: "Sasha"
                },
                {
                    avatar: "https://sun9-37.userapi.com/impg/Pw9UNEiaIVziU5e3q6tjzf2W10pIjE15aX6hnA/GG3L3B1OFc8.jpg?size=200x0&quality=96&crop=1,264,1434,1434&sign=96f0d1bb17d90d027aa18ef74019b416&ava=1",
                    message: 'fasfasfas', name: "Vlada"
                },
                {
                    avatar: "https://sun9-5.userapi.com/impg/j0o8YzgFqJKstJ42Ksz5R2537t8KwG0B4wuW-Q/Q_FUy1Sp1T0.jpg?size=200x0&quality=96&crop=124,1,810,810&sign=43e64b3b3ba87e0598bf02295b4fb7b9&ava=1",
                    message: 'asdasda', name: "Sanya"
                },
                { avatar: "https://sun9-5.userapi.com/impg/j0o8YzgFqJKstJ42Ksz5R2537t8KwG0B4wuW-Q/Q_FUy1Sp1T0.jpg?size=200x0&quality=96&crop=124,1,810,810&sign=43e64b3b3ba87e0598bf02295b4fb7b9&ava=1", message: '', name: "" }
            ],
            newTextArea: ""
        }
    },
    _rerenderTree() {
        alert('')
    },
    observe(observer) {
        this._rerenderTree = observer;
    },

    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._rerenderTree(this._state);
    }
}


export default store;
