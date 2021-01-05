import React, { Component } from "react";
import SearchFormComponent from "./SearchFormComponent";
import MoviesContainerComponent from "./MoviesContainerComponent";
import { connect } from "react-redux";
import Spinner from "../Layout/Spinner";

export class LandingComponent extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        <SearchFormComponent />
        {loading ? <Spinner /> : <MoviesContainerComponent />}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.movies.loading,
});
export default connect(mapStateToProps)(LandingComponent);
