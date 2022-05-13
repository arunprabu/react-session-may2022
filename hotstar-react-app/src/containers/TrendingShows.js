import React, { Component } from 'react'

class TrendingShows extends Component {

  constructor(){
    super();
    this.state = {
      showList: [
        {
          id: 1, 
          name: 'Planet Earth', 
          category: 'Infotainment',
          releasedOn: 'Last Week',
          duration: '40 mins',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 
          isInWatchlist: false
        },
        {
          id: 2, 
          name: 'Planet Earth II',
          category: 'Infotainment',
          releasedOn: 'Today',
          duration: '60 mins',
          desc: 'Nam maximus augue ac lacinia feugiat.', 
          isInWatchlist: false 
        },
        {
          id: 3, 
          name: 'IPL 2022', 
          category: 'Sports',
          releasedOn: 'Today',
          duration: '4 hours',
          desc: 'Vivamus vitae blandit justo, eu feugiat quam.', 
          isInWatchlist: false 
        },
        {
          id: 4, 
          name: 'Man vs Wild', 
          category: 'Infotainment',
          releasedOn: 'Today',
          duration: '45 mins',
          desc: ' Suspendisse tincidunt rutrum mattis.', 
          isInWatchlist: false 
        }
      ]
    }
  }


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