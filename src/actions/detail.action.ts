import { DetailState } from "../stores/detail.store"

export enum DetailActionType {
  Get = '[DetailActionType]Get',
  GetSuccess = '[DetailActionType]GetSuccess'
}

export interface DetailAction {
  type: DetailActionType,
  payload?: DetailState,
  meta?: Record<string, any>
}

export function get(url: string): DetailAction {
  return {
    type: DetailActionType.Get,
    meta: { url }
  }
}

export function getSuccess(detailState: DetailState) {
  return {
    type: DetailActionType.GetSuccess,
    payload: detailState
  }
}