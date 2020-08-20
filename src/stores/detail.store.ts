import { StatusizedState, State } from './base.store';

export interface TypeDetail extends State {
  name: string;
  url: string;
}

export interface Type extends State {
  slot: number;
  type: TypeDetail;
}

export interface DetailState extends StatusizedState {
  name: string;
  types: Type[];
  locationAreaEncounters: string,
}

export const initialState: DetailState = {
  name: '',
  types: [],
  locationAreaEncounters: '',
  isLoading: false
}