import * as axios from 'axios';

const instance = axios.create({
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers:{"API-KEY": "e047b0c0-9817-4419-9007-3e070e08e4eb"}
});
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response=>{return response.data});
    },
    getUsersChange(pageNumber=1, pageSize = 10) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`).then(response=>{return response.data});
    }
}
export const followAPI = {
    deleteFollow(id) {
        return instance.delete(`follow/${id}`).then(response=>{return response.data});
    },
    postFollow(id){
        return instance.post(`follow/${id}`).then(response=>{return response.data});
    },
}
export const authAPI = {
    getAuthMe() {
        return instance.get(`auth/me`).then(response=>{return response.data});
    }
}
export const profileAPI = {
    getProfilePhoto(id) {
        return instance.get(`profile/${id}`).then(response=>{return response.data.photos});
    },
    getProfileData(id){
        return instance.get(`profile/${id}`).then(response=>{return response.data});
    }
}