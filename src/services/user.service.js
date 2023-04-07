import config from '../common/config';
// import { authHeader } from '../helpers';

export const userService = {
    login,
    // logout,
    // register,
    // getAll,
    // getById,
    // update,
    // delete: _delete
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    };
    // console.log("login", requestOptions),

    return fetch(`${config.API_URL}/users/authenticate`, requestOptions)
        // .then(handleResponse)
        .then(user => {
            // login thành công nếu có một token jwt trong response
            if (user.token) {
                // lưu dữ liệu user và token jwt vào local storage để giữ user được log in trong page
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

// function logout() {
//     // xoá user từ local storage để log out
//     localStorage.removeItem('user');
// }

// function register(user) {
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.API_URL}/users/register`, requestOptions).then(handleResponse);
// }

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.API_URL}/users`, requestOptions).then(handleResponse);
// }


// function getById(id) {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.API_URL}/users/${id}`, requestOptions).then(handleResponse);
// }

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`${config.API_URL}/users/${user.id}`, requestOptions).then(handleResponse);
// }

// function _delete(id) {
//     const requestOptions = {
//         method: 'DELETE',
//         headers: authHeader()
//     };

//     return fetch(`${config.API_URL}/users/${id}`, requestOptions).then(handleResponse);
// }

// function handleResponse(response) {
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);
//         if (!response.ok) {
//             if (response.status === 401) {
//                 // tự động logout nếu response 401 được trả về từ api
//                 logout();
//                 location.reload(true);
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }