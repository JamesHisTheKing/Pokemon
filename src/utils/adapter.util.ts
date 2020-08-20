import _ from 'lodash';
import { Model } from '../models/base.model';
import { State } from '../stores/base.store';

const ListItem = {
  name: 'name',
  url: 'url'
}

const Detail = {
  name: 'name',
  locationAreaEncounters: 'location_area_encounters'
}

const Type = {
  slot: 'slot'
}

export const KeyMap = {
  ListItem,
  Detail,
  Type,
}

export function adaptFromApi(
  keyMap: Record<string, string>,
  model: Model,
  emptyAsNil = false
): State {
  const state: State = {};
  Object.keys(keyMap).forEach((key: string) => {
    const apiKey = keyMap[key];
    const validatorName = emptyAsNil ? 'isEmpty' : 'isNil';
    if (!_[validatorName]((model as any)[apiKey])) {
      (state as any)[key] = (model as any)[apiKey];
    }
  });
  return state;
}