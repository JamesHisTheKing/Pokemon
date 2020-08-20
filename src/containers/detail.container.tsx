import _ from "lodash";
import React, { Dispatch, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { DetailAction, get } from "../actions/detail.action";
import { AppState } from "../stores";
import { DetailState, initialState, Type } from "../stores/detail.store";

function shouldReloadData(detailState: DetailState, url: string): boolean {
  return (
    !detailState.isLoading &&
    (_.isEqual(detailState, initialState) ||
      detailState.locationAreaEncounters !== `${url}encounters`)
  );
}

const Container: React.FC<RouteComponentProps> = (props) => {
  const url = props.location.search.replace("?url=", "");
  const dispatch: Dispatch<DetailAction> = useDispatch();
  const detail: DetailState = useSelector((state: AppState) => state.detail);

  useEffect(() => {
    if (shouldReloadData(detail, url)) {
      dispatch(get(url));
    }
  }, [dispatch, detail, url]);

  return (
    <div>
      {detail.isLoading && <div>Loading...</div>}
      <h1>{detail.name}</h1>
      {_.isArray(detail.types) && (
        <ul style={{ textAlign: "left" }}>
          {detail.types.map((value: Type, index: number) => (
            <li key={index}>{value.type.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const DetailContainer = withRouter(Container);
