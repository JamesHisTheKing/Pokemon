import { Model } from './base.model'

export interface TypeDetail extends Model {
  name: string;
  url: string;
}

export interface Type extends Model {
  slot: number;
  type: TypeDetail;
}

export interface DetailModel extends Model {
  name: string;
  location_area_encounters: string;
  types: Type[];
}