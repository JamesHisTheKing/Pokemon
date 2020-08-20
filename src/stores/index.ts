import { ListState, initialState as initialListState } from './list.store';
import { DetailState, initialState as initialDetailState } from './detail.store';

export interface AppState {
  list: ListState;
  detail: DetailState;
}

export const initialState: AppState = {
  list: initialListState,
  detail: initialDetailState
}