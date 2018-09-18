import { siteConstants } from '../_constants';

export function site(state = {}, action) {
  switch (action.type) {
    case siteConstants.SELECT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case siteConstants.SELECT_SUCCESS:
      return {
        bookid:action.book.bookId,
        accounts: action.book.accounts,
        categories:action.book.Categories
      };
    case siteConstants.SELECT_FAILURE:
      return {};
    default:
      return state
  }
}