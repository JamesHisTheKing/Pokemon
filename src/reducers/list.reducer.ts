import { ListState } from '../stores/list.store';
import { initialState } from '../stores/list.store';
import { ListActionType, ListAction } from '../actions/list.action';

export function listReducer(state: ListState = initialState, action: ListAction) {
  switch (action.type) {
    case ListActionType.Get:
      return {
        ...state,
        isLoading: true
      }
    case ListActionType.GetSuccess:
      return {
        ...state,
        isLoading: false,
        // @NOTE it depends whether or not the if the existing list items shold be updated or refreshed
        // list: [
        //   ...state.list,
        //   ...(action.payload as ListState).list
        // ]
        list: (action.payload as ListState).list
      }
    default:
      return state;
  }
}