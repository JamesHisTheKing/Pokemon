import { DetailAction, DetailActionType } from '../actions/detail.action';
import { DetailState, initialState } from '../stores/detail.store';


export function detailReducer(state: DetailState = initialState, action: DetailAction) {
  switch (action.type) {
    case DetailActionType.Get:
      return {
        ...state,
        isLoading: true
      }
    case DetailActionType.GetSuccess:
      return {
        ...state,
        isLoading: false,
        ...action.payload
      }
    default:
      return state;
  }
}