import Axios from 'axios';
import { adaptFromApi } from '../adapters/list.adapter';
import { ListModel } from '../models/list.model';
import { ListState } from '../stores/list.store';

const LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150'

export async function get(): Promise<ListState> {
  const data: ListModel = (await Axios.get(LIST_URL)).data;
  return {
    list: adaptFromApi(data.results)
  } as ListState
}