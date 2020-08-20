import { StatusizedState, State } from "./base.store";

export interface ListItem extends State {
  name: string;
  url: string;
}

export interface ListState extends StatusizedState {
  list: ListItem[];
}

export const initialState: ListState = {
  list: [],
  isLoading: false
}
