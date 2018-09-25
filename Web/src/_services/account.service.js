import { authHeader } from '../_helpers';
import { userActions } from '../_actions';

export const accountService = {
    create,
    getAllByBookId,
    getAllByTypeInBook,
    update,
    delete: _delete
};

const apiUrl = 'http://172.18.24.135:5000/api'

function getAllByBookId(bookId) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/accounts/getbybook/${bookId}`, requestOptions).then(handleResponse);
        
}

function getAllByTypeInBook(bookId, type) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/accounts/getbytypeinbook/${bookId}/${type}`, requestOptions).then(handleResponse);
}

function create(account) {
    const requestOptions = {
        method: 'POST',
        headers: {...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(account)
    };

    return fetch(`${apiUrl}/accounts`, requestOptions).then(handleResponse);
}

function update(account) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(account)
    };

    return fetch(`${apiUrl}/accounts/${account.id}`, requestOptions).then(handleResponse);
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${apiUrl}/accounts/${id}`, requestOptions).then(handleResponse);
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