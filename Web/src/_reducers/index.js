import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { books } from './books.reducer';
import { accounts } from './accounts.reducer';
import { site } from './site.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  books,
  accounts,
  site,
  alert
});

export default rootReducer;