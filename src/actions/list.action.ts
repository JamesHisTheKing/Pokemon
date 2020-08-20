import { ListState } from "../stores/list.store";

export enum ListActionType {
  Get = '[ListActionType]Get',
  GetSuccess = '[ListActionType]GetSuccess'
}

export interface ListAction {
  type: ListActionType,
  payload?: ListState,
  meta?: Record<string, any>
}

export function get(): ListAction {
  return {
    type: ListActionType.Get,
  }
}

export function getSuccess(listState: ListState) {
  return {
    type: ListActionType.GetSuccess,
    payload: listState
  }
}