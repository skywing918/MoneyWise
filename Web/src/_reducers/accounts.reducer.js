import { accountConstants } from '../_constants';

export function accounts(state = {}, action) {
  switch (action.type) {
    case accountConstants.CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case accountConstants.CREATE_SUCCESS:
      if(state.items==null)
      {
        state.items=[];
      }
      state.items.push(action.book)
      return {
        items:state.items
      };
    case accountConstants.CREATE_FAILURE:
      return {
        error: action.error
      };
    case accountConstants.GETBYOWNER_REQUEST:
      return {
        loading: true
      };
    case accountConstants.GETBYOWNER_SUCCESS:
      return {
        items: action.books
      };
    case accountConstants.GETBYOWNER_FAILURE:
      return {
        error: action.error
      };
    case accountConstants.GETBYID_REQUEST:
      return {
        loading: true
      };
    case accountConstants.GETBYID_SUCCESS:
      return {
        userDetails: action.userDetails
      };
    case accountConstants.GETBYID_FAILURE:
      return {
        error: action.error
      };
    case accountConstants.UPDATE_REQUEST:
      return { ...state,
        updating: true };
    case accountConstants.UPDATE_SUCCESS:
      return {};
    case accountConstants.UPDATE_FAILURE:
      return {};
    case accountConstants.LOCKORUNLOCK_REQUEST:
      return { ...state,
        updating: true };
    case accountConstants.LOCKORUNLOCK_SUCCESS:
      return {...state};
    case accountConstants.LOCKORUNLOCK_FAILURE:
      return {...state,
        updating: false};
    case accountConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id
            ? { ...user, deleting: true }
            : user
        )
      };
    case accountConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case accountConstants.DELETE_FAILURE:
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