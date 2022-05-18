import React from "react";
import PropTypes from 'prop-types';

function Show({ index, show, showHandle}) {

  console.log(show);

  return (
    <div className="col-md-3" key={show.id}>
      <div className="card">
        <img src={show.thumbnail} className="card-img-top" alt={show.name} />
        <div className="card-body">
          <h5 className="card-title">{show.name}</h5>
          <p className="card-text">{show.desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Duration: {show.duration}</li>
          <li className="list-group-item">Category: {show.category}</li>
          <li className="list-group-item">Released {show.releasedOn}</li>
        </ul>
        <div className="card-body">
          <button type="button" className="btn btn-sm btn-primary">
            Watch Now
          </button>
          <button
            type="button"
            className="float-end btn btn-sm btn-success"
            data-value={index}
            onClick={showHandle}
          >
            {show.isInWatchlist ? "In Watchlist" : "Add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

Show.propTypes = {
  index: PropTypes.number,
  show: PropTypes.object,
  showHandle: PropTypes.func
}

export default Show;
