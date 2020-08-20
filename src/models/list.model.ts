import { Model } from './base.model'

export interface ListItem extends Model {
  name: string;
  url: string;
}

export interface ListModel extends Model {
  results: ListItem[]
}