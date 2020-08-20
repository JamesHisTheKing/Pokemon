import { DetailModel } from "../models/detail.model";
import { DetailState, Type, TypeDetail } from "../stores/detail.store";
import { adaptFromApi as adaptFromModel, KeyMap } from '../utils/adapter.util';

export function adaptFromApi(apiDetail: DetailModel): DetailState {
  const types: Type[] = apiDetail.types;
  const detailState = adaptFromModel(KeyMap.Detail, apiDetail) as DetailState;
  detailState.types = types.map((type: Type) => {
    const typeDetail = type.type;
    const typeState = adaptFromModel(KeyMap.Type, type) as Type;
    typeState.type = adaptFromModel(KeyMap.ListItem, typeDetail) as TypeDetail;
    return typeState
  })
  return detailState;
}