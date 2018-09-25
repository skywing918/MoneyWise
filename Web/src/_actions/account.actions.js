import { accountConstants } from '../_constants';
import { accountService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const accountActions = {
    create,
    getAllByBookId,
    getAllByTypeInBook,
    getById,
    update,
    delete: _delete
};

function create(account) {
    return dispatch => {
        dispatch(request(account));

        accountService.create(account)
            .then(
                account => {
                    dispatch(success(account));
                    //history.push('/system/users');
                    //dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(account) { return { type: accountConstants.CREATE_REQUEST, account } }
    function success(account) { return { type: accountConstants.CREATE_SUCCESS, account } }
    function failure(error) { return { type: accountConstants.CREATE_FAILURE, error } }
}
function getAllByBookId(bookId) {
    return dispatch => {
        dispatch(request());

        accountService.getAllByBookId(bookId)
            .then(
                accounts => dispatch(success(accounts)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: accountConstants.GETALL_REQUEST } }
    function success(accounts) { return { type: accountConstants.GETALL_SUCCESS, accounts } }
    function failure(error) { return { type: accountConstants.GETALL_FAILURE, error } }
}

function getAllByTypeInBook(bookId, type) {
    return dispatch => {
        dispatch(request());

        accountService.getAllByTypeInBook(bookId, type)
            .then(
                accounts => dispatch(success(accounts)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: accountConstants.GETALL_REQUEST } }
    function success(accounts) { return { type: accountConstants.GETALL_SUCCESS, accounts } }
    function failure(error) { return { type: accountConstants.GETALL_FAILURE, error } }
}

function getById(id) {
    return dispatch => {
        dispatch(request(id));

        accountService.getById(id)
            .then(
                accountDetails => dispatch(success(accountDetails)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: accountConstants.GETBYID_REQUEST } }
    function success(accountDetails) { return { type: accountConstants.GETBYID_SUCCESS, accountDetails } }
    function failure(error) { return { type: accountConstants.GETBYID_FAILURE, error } }
}

function update(id, account) {
    return dispatch => {
        dispatch(request(id));

        accountService.update(account)
            .then(
                account => {
                    dispatch(success(account));
                    history.push('/system/users');
                    dispatch(alertActions.success('Update successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(id) { return { type: accountConstants.UPDATE_REQUEST, id } }
    function success(id) { return { type: accountConstants.UPDATE_SUCCESS, id } }
    function failure(error) { return { type: accountConstants.UPDATE_FAILURE, error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        accountService.delete(id)
            .then(
                id => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: accountConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: accountConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: accountConstants.DELETE_FAILURE, id, error } }
}