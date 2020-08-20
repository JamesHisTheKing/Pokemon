import { combineReducers } from 'redux';
import { detailReducer } from './detail.reducer';
import { listReducer } from './list.reducer';

export const rootReducer = combineReducers({
  list: listReducer,
  detail: detailReducer
});

export type RootState = ReturnType<typeof rootReducer>