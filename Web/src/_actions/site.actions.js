import { siteConstants } from '../_constants';
import { bookService } from '../_services';
import { alertActions } from './';

export const siteActions = {
    changeBook
};

function changeBook(bookId) {
    return dispatch => {
        dispatch(request(bookId));

        bookService.getRelatedByBookId(bookId)
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

    function request(book) { return { type: siteConstants.SELECT_REQUEST, book } }
    function success(book) { return { type: siteConstants.SELECT_SUCCESS, book } }
    function failure(error) { return { type: siteConstants.SELECT_FAILURE, error } }
}