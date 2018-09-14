import { authHeader } from '../_helpers';
import { userActions } from '../_actions';

export const bookService = {
    create,
    getByOwner,
    update,
    delete: _delete
};

const apiUrl = 'http://172.18.24.135:5000/api'

function getByOwner(userId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/books/getbyowner/${userId}`, requestOptions).then(handleResponse);
        
}

function create(book) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    };

    return fetch(`${apiUrl}/books`, requestOptions).then(handleResponse);
}

function update(book) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    };

    return fetch(`${apiUrl}/books/${book.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/books/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                userActions.logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}