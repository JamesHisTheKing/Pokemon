import Axios from "axios";
import { adaptFromApi } from "../adapters/detail.adapter";
import { DetailModel } from "../models/detail.model";
import { DetailState } from "../stores/detail.store";

export async function get(url: string): Promise<DetailState> {
  const data: DetailModel = (await Axios.get(url)).data;
  return adaptFromApi(data);
}