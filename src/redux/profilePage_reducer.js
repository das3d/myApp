import { authAPI, profileAPI } from "../DAL/API";

const ADD_POST = 'ADD_POST';
const UPDATE_TEXT = 'UPDATE_TEXT';
const DEL_POST = 'DEL_POST';
const SET_PROFILE = 'SET_PROFILE';

let initStore = {
    profile: null,
    postsData: [
        {
            avatar: "https://sun9-5.userapi.com/impg/j0o8YzgFqJKstJ42Ksz5R2537t8KwG0B4wuW-Q/Q_FUy1Sp1T0.jpg?size=200x0&quality=96&crop=124,1,810,810&sign=43e64b3b3ba87e0598bf02295b4fb7b9&ava=1",
            message: 'trtebf', name: "Sasha", postId:1
        },
        {
            avatar: "https://sun9-37.userapi.com/impg/Pw9UNEiaIVziU5e3q6tjzf2W10pIjE15aX6hnA/GG3L3B1OFc8.jpg?size=200x0&quality=96&crop=1,264,1434,1434&sign=96f0d1bb17d90d027aa18ef74019b416&ava=1",
            message: 'fasfasfas', name: "Vlada", postId:2
        },
        {
            avatar: "https://sun9-5.userapi.com/impg/j0o8YzgFqJKstJ42Ksz5R2537t8KwG0B4wuW-Q/Q_FUy1Sp1T0.jpg?size=200x0&quality=96&crop=124,1,810,810&sign=43e64b3b3ba87e0598bf02295b4fb7b9&ava=1",
            message: 'asdasda', name: "Sanya", postId:3
        },
        { avatar: "https://sun9-5.userapi.com/impg/j0o8YzgFqJKstJ42Ksz5R2537t8KwG0B4wuW-Q/Q_FUy1Sp1T0.jpg?size=200x0&quality=96&crop=124,1,810,810&sign=43e64b3b3ba87e0598bf02295b4fb7b9&ava=1",
         message: '', name: "", postId:4 },
         { avatar: "https://sun9-5.userapi.com/impg/j0o8YzgFqJKstJ42Ksz5R2537t8KwG0B4wuW-Q/Q_FUy1Sp1T0.jpg?size=200x0&quality=96&crop=124,1,810,810&sign=43e64b3b3ba87e0598bf02295b4fb7b9&ava=1",
         message: '', name: "", postId:5 }
    ],
    newTextArea: "s"
};

const profileReducer = (state = initStore, action) => {
    switch (action.type) {
        case ADD_POST: {
            let data = {
                avatar: "https://sun9-5.userapi.com/impg/j0o8YzgFqJKstJ42Ksz5R2537t8KwG0B4wuW-Q/Q_FUy1Sp1T0.jpg?size=200x0&quality=96&crop=124,1,810,810&sign=43e64b3b3ba87e0598bf02295b4fb7b9&ava=1",
                message: action.postText,
                name: "Sanya",
                postId: 3
            }
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(data);
            stateCopy.newTextArea = ``;
            return stateCopy;}
        case UPDATE_TEXT:{
            let stateCopy = {...state};
            stateCopy.newTextArea = action.newText;
            return stateCopy;}
        case DEL_POST:{
            // let stateCopy = {...state};
            // stateCopy.postsData = [...state.postsData];
            //     if(stateCopy.postsData.postId === action.pst){
                // stateCopy.postsData = [...state.postsData.splice(stateCopy.postsData.indexOf(stateCopy.postsData[action.pst]), 1) ]
            //     stateCopy.postsData.splice(stateCopy.postsData.indexOf(stateCopy.postsData[action.pst]), 1);
            return {
                ...state,
                postsData: state.postsData.map(f => {
                    if (f.postId !== action.pst) {
                        return f;
                    }
                    return {};
                })
            }
      
                
        }
        case SET_PROFILE:{
            return {...state, profile: action.profile }}
        
        default: return state;
    }
}
export const addPost = (postText) => ({ type: ADD_POST, postText: postText });
export const updatePostText = (newText) => ({ type: UPDATE_TEXT, newText: newText });
export const deletePost = (pst) =>({ type: DEL_POST, pst: pst });
export const setProfile = (profile) =>({ type: SET_PROFILE, profile });

export const getProfile = (userId) =>{
    return (dispatch) =>{
        
        authAPI.getAuthMe().then(data=>{ 
            if(!userId){
            userId = data.data.id;
            
        }
        profileAPI.getProfileData(userId).then(data => {
            dispatch(setProfile(data));

        });
     });
        // console.log(userId);
        
        // profileAPI.getProfileData(userId).then(data => {
        //     dispatch(setProfile(data));

        // });

    }
}

export default profileReducer;