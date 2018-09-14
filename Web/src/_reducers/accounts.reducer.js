import { accountConstants } from '../_constants';

export function accounts(state = {}, action) {
  switch (action.type) {
    case accountConstants.CREATE_REQUEST:
      return {
        ...state,
        loading: true
      };
    case accountConstants.CREATE_SUCCESS:
      if(state.items==null) {
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
    case accountConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case accountConstants.GETALL_SUCCESS:
      return {
        items: action.accounts
      };
    case accountConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    default:
      return state
  }
}