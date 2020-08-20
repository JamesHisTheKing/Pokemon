import { Dispatch } from 'react';
import { MiddlewareAPI } from 'redux';
import { DetailAction, DetailActionType, getSuccess } from '../actions/detail.action';
import { get } from '../services/detail.service';
import { DetailState } from '../stores/detail.store';

export const detailMiddleware = (store: MiddlewareAPI) => (next: Dispatch<DetailAction>) => async (action: DetailAction) => {
  switch (action.type) {
    case DetailActionType.Get: {
      next(action);
      const { url } = action.meta as any;
      const state: DetailState = await get(url);
      return store.dispatch(getSuccess(state))
    }
    default: {
      return next(action)
    }
  }
}