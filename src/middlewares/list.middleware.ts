import { Dispatch } from "react"
import { MiddlewareAPI } from 'redux'
import { ListAction, ListActionType, getSuccess } from "../actions/list.action"
import { get } from "../services/list.service";
import { ListState } from "../stores/list.store";

export const listMiddleware = (store: MiddlewareAPI) => (next: Dispatch<ListAction>) => async (action: ListAction) => {
  switch (action.type) {
    case ListActionType.Get: {
      next(action);
      const state: ListState = await get();
      return store.dispatch(getSuccess(state))
    }
    default: {
      return next(action)
    }
  }
}