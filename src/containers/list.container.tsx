import { Dispatch } from "react";
import { connect } from "react-redux";
import { get, ListAction } from "../actions/list.action";
import { listComponent } from "../components/list.component";
import { AppState } from "../stores";

const mapStateToProps = (state: AppState) => {
  return {
    list: state.list.list,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ListAction>) => {
  return {
    getList: () => {
      dispatch(get());
    },
  };
};

export const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(listComponent);
