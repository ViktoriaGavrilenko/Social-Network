import * as axios from "axios";


const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'API-KEY': '2b7bc651-71c1-4af7-a44d-fedbaf7a0a88'
	}

})

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => {
				return response.data;
			});
	},
	follow(userId) {
			return instance.post(`follow/${userId}`)

	},
	unfollow(userId) {

		return instance.delete(`follow/${userId}`)
	},
	getProfile(userId) {
		return instance.get(`profile/` + userId);
	}
}
export const authAPI = {
  me() {
	  return instance.get(`auth/me`)
  }

}

// export const getUsers2 = (currentPage = 1, pageSize = 10) => {
// 	return instance.get(baseURL + `follow?page=${currentPage}&count=${pageSize}`)
// 		.then(response => {
// 			return response.data;
// 		});
// }

// function sum(a,b){
// 	a+b;
// }
//
// const a = sum(1,2); // undefined