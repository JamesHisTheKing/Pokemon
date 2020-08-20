import { ListItem as ApiListItem } from "../models/list.model";
import { ListItem } from "../stores/list.store";
import { adaptFromApi as adaptFromModel, KeyMap } from '../utils/adapter.util';

export function adaptFromApi(apiList: ApiListItem[]): ListItem[] {
  return apiList.map((apiListItem: ApiListItem) =>
    adaptFromModel(KeyMap.ListItem, apiListItem)) as ListItem[];
}