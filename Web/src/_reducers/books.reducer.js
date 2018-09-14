import { bookConstants } from '../_constants';

export function books(state = {}, action) {
  switch (action.type) {
    case bookConstants.CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case bookConstants.CREATE_SUCCESS:
      state.items.push(action.book)
      return {
        items:state.items
      };
    case bookConstants.CREATE_FAILURE:
      return {
        error: action.error
      };
    case bookConstants.GETBYOWNER_REQUEST:
      return {
        loading: true
      };
    case bookConstants.GETBYOWNER_SUCCESS:
      return {
        items: action.books
      };
    case bookConstants.GETBYOWNER_FAILURE:
      return {
        error: action.error
      };
    case bookConstants.GETBYID_REQUEST:
      return {
        loading: true
      };
    case bookConstants.GETBYID_SUCCESS:
      return {
        userDetails: action.userDetails
      };
    case bookConstants.GETBYID_FAILURE:
      return {
        error: action.error
      };
    case bookConstants.UPDATE_REQUEST:
      return { ...state,
        updating: true };
    case bookConstants.UPDATE_SUCCESS:
      return {};
    case bookConstants.UPDATE_FAILURE:
      return {};
    case bookConstants.LOCKORUNLOCK_REQUEST:
      return { ...state,
        updating: true };
    case bookConstants.LOCKORUNLOCK_SUCCESS:
      return {...state};
    case bookConstants.LOCKORUNLOCK_FAILURE:
      return {...state,
        updating: false};
    case bookConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case bookConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case bookConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user 
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    default:
      return state
  }
}