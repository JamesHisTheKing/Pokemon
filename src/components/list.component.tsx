import _ from "lodash";
import React from "react";
import { ListItem, ListState } from "../stores/list.store";
import { Link } from "react-router-dom";

interface ListProps extends ListState {
  getList: Function;
}

export class listComponent extends React.Component<ListProps> {
  componentDidMount() {
    this.props.getList();
  }

  render() {
    return (
      <div>
        {this.props.isLoading && <div>Loading...</div>}
        <h1>My Pokedex</h1>
        {_.isArray(this.props.list) && (
          <ul style={{ textAlign: "left" }}>
            {this.props.list.map((value: ListItem, index: number) => (
              <li key={index}>
                {/* <Link to={{ pathname: "/detail", state: { url: value.url } }}> */}
                <Link
                  to={{
                    pathname: "/detail",
                    search: `?url=${value.url}`,
                  }}
                >
                  {value.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
