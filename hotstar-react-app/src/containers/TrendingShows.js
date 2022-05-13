import React, { Component } from 'react'

class TrendingShows extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="card" >
            <img src="https://via.placeholder.com/250x180?text=NatGeo" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Trending Show name</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Duration: 40 mins</li>
              <li className="list-group-item">Category: Infotainment</li>
              <li className="list-group-item">Released Today</li>
            </ul>
            <div className="card-body">
              <button type='button' className='btn btn-sm btn-primary'>
                Watch Now
              </button>
              <button type='button' className='float-end btn btn-sm btn-success'>
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>


        <div className='alert alert-warning'>
          No Trending Shows Found
        </div>
      </div>
    )
  }
}

export default TrendingShows;