import React, { Component } from 'react'
import Show from '../components/Home/Show';

class TrendingShows extends Component {

  constructor() {
    super();
    this.state = {
      showList: [
        {
          id: 1,
          name: 'Planet Earth',
          category: 'Infotainment',
          releasedOn: 'Last Week',
          duration: '40 mins',
          thumbnail: 'https://via.placeholder.com/250x180?text=PlanetEarth',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          isInWatchlist: true
        },
        {
          id: 2,
          name: 'Planet Earth II',
          category: 'Infotainment',
          releasedOn: 'Today',
          duration: '60 mins',
          thumbnail: 'https://via.placeholder.com/250x180?text=PlanetEarthII',
          desc: 'Nam maximus augue ac lacinia feugiat.',
          isInWatchlist: false
        },
        {
          id: 3,
          name: 'IPL 2022',
          category: 'Sports',
          releasedOn: 'Today',
          duration: '4 hours',
          thumbnail: 'https://via.placeholder.com/250x180?text=IPL2022',
          desc: 'Vivamus vitae blandit justo, eu feugiat quam.',
          isInWatchlist: false
        },
        {
          id: 4,
          name: 'Man vs Wild',
          category: 'Infotainment',
          releasedOn: 'Today',
          duration: '45 mins',
          thumbnail: 'https://via.placeholder.com/250x180?text=ManVsWild',
          desc: ' Suspendisse tincidunt rutrum mattis.',
          isInWatchlist: false
        }
      ]
    }
  }

  handleAddToWatchlist(index) {
    // working with state immutably
    let shows = [...this.state.showList]; // shallow copy
    shows[index].isInWatchlist = !shows[index].isInWatchlist; // toggling  isInWatchlist
    this.setState({
      showList: shows
    });
  }

  showHandle = (event) => {
    console.dir(event.target)
    let value = event.target.dataset.value;
    this.handleAddToWatchlist(value);
  };

  render() {

    // ideal place for you to loop thru using map -- lists
    // ideal place for any comp specific transformations in JSX
    let trendingShowList = null;

    if (Array.isArray(this.state.showList)) {
      trendingShowList = this.state.showList.map((show, index) => {
        return (
          <Show index={index} 
            show={show} 
            showHandle={this.showHandle} key={show.id}></Show>
        )
      });
    }

    return (
      <div className="row">
        {/* Conditionals */}
        {
          this.state.showList && this.state.showList.length > 0 ?
            trendingShowList
            :
            <div className='alert alert-warning'>
              No Trending Shows Found!
            </div>
        }
      </div>
    )
  }
}

export default TrendingShows;