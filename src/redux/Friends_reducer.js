const SET_DATA = 'SET_DATA';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';


let initStore = {
    friendsData: [
        
    ],
};

const friendsReducer = (state = initStore, action) => {
    switch (action.type) {
        case SET_DATA:{
            return {...state, friendsData: [...state.friendsData, ...action.friends] }
        }      
        case FOLLOW:{
            return {
                ...state,
                friendsData: state.friendsData.map(f => {
                    if (f.id === action.id) {
                        return { ...f, followed: true }
                    }
                    return f;
                })
            }
         }
        case UNFOLLOW:{
            return {
                ...state,
                friendsData: state.friendsData.map(f => {
                    if (f.id === action.userId) {
                        return { ...f, followed: false }
                    }
                    return f;
                })
            }
        }

        default: return state;
    };

}

export const setDataAC = (friends) => ({ type: SET_DATA, friends:friends });
export const followAC = (userId) => ({ type: FOLLOW, userId:userId });
export const unFollowAC = (userId) => ({ type: UNFOLLOW, userId:userId });

export default friendsReducer;