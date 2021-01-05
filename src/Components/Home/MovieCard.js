import React, { Component } from "react";
import { Link } from "react-router-dom";

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const imgBaseUrl = "https://image.tmdb.org/t/p/w500";
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img
            className="w-100 mb-2"
            src={imgBaseUrl + movie.poster_path}
            alt="Movie Cover"
          />
          <h5 className="text-light card-title">
            {movie.title} - {movie.release_date}
          </h5>
          <Link className="btn btn-primary" to={"/movie/" + movie.id}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;