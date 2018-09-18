import { bookConstants } from '../_constants';
import { bookService } from '../_services';
import { siteActions } from './';
import { alertActions } from './';
import { history } from '../_helpers';

export const bookActions = {
    create,
    getByOwner,
    getById,
    update,
    delete: _delete
};

function create(book) {
    return dispatch => {
        dispatch(request(book));

        bookService.create(book)
            .then(
                book => {
                    dispatch(success(book));
                    //history.push('/system/users');
                    //dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(book) { return { type: bookConstants.CREATE_REQUEST, book } }
    function success(book) { return { type: bookConstants.CREATE_SUCCESS, book } }
    function failure(error) { return { type: bookConstants.CREATE_FAILURE, error } }
}

function getByOwner(userName) {
    return dispatch => {
        dispatch(request());

        bookService.getByOwner(userName)
            .then(
                books=>
                {
                    let defaultBook = books[3];
                    dispatch(siteActions.changeBook(defaultBook.id));
                    return books;
                }
            )
            .then(
                books => dispatch(success(books)),
                error => dispatch(failure(error.toString()))
            )
            
    };

    function request() { return { type: bookConstants.GETBYOWNER_REQUEST } }
    function success(books) { return { type: bookConstants.GETBYOWNER_SUCCESS, books } }
    function failure(error) { return { type: bookConstants.GETBYOWNER_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request(id));

        bookService.getById(id)
            .then(
                bookDetails => dispatch(success(bookDetails)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: bookConstants.GETBYID_REQUEST } }
    function success(bookDetails) { return { type: bookConstants.GETBYID_SUCCESS, bookDetails } }
    function failure(error) { return { type: bookConstants.GETBYID_FAILURE, error } }
}

function update(id, book) {
    return dispatch => {
        dispatch(request(id));

        bookService.update(book)
            .then(
                book => {
                    dispatch(success(id));
                    history.push('/system/users');
                    dispatch(alertActions.success('Update successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(id) { return { type: bookConstants.UPDATE_REQUEST, id } }
    function success(id) { return { type: bookConstants.UPDATE_SUCCESS, id } }
    function failure(error) { return { type: bookConstants.UPDATE_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        bookService.delete(id)
            .then(
                book => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: bookConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: bookConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: bookConstants.DELETE_FAILURE, id, error } }
}