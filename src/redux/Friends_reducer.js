import { followAPI, usersAPI } from "../DAL/API";

const SET_DATA = 'SET_DATA';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';


let initStore = {
    friendsData: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isLoading: false
};

const friendsReducer = (state = initStore, action) => {
    switch (action.type) {
        case SET_DATA: {
            return { ...state, friendsData: action.friends }
        }
        case FOLLOW: {
            return {
                ...state,
                friendsData: state.friendsData.map(f => {
                    if (f.id === action.userId) {
                        return { ...f, followed: true }
                    }
                    return f;
                })
            }
        }
        case UNFOLLOW: {
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
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_COUNT: {
            return { ...state, totalCount: action.totalCount }
        }
        case TOGGLE_IS_LOADING: {
            return { ...state, isLoading: action.isLoading }
        }
        default: return state;
    };

}

export const setData = (friends) => ({ type: SET_DATA, friends });
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_COUNT, totalCount });
export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })

export const getFriendsInfo = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsLoading(false));
        usersAPI.getUsersChange(pageNumber, pageSize).then(data => {
            debugger
            dispatch(toggleIsLoading(true));
            dispatch(setData(data.items));

        });
    }
}
export const getFriendsData = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsLoading(false));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setData(data.items));
                dispatch(setTotalUsersCount(data.totalCount));

                dispatch(toggleIsLoading(true));

            });
    }
}
export const unfollowTH = (id) => {
    return (dispatch) => {
        followAPI.deleteFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(unFollow(id));
            }

        });
    }
}
export const followTH = (id) => {
    return (dispatch) => {
        followAPI.postFollow(id).then(data => {
            if (data.resultCode === 0) {
                dispatch(follow(id));
            }
        });
    }
}
export default friendsReducer;