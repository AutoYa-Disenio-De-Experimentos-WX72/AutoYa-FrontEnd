import axios from 'axios';

const API_URL = 'http://localhost:5267/api/v1/';

class AuthService {
    login(user) {
        return axios
            .post(API_URL + 'users/sign-in', {
                email: user.email,
                password: user.password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem('user', JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios.post(API_URL + 'users/sign-up', {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        });
    }
}

export default new AuthService();
