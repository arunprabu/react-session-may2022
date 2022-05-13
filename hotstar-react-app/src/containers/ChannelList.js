import React, { Component } from 'react';

// class comp should extend Component from react
// only then render method will be called automatically
class ChannelList extends Component {

  /* lets have component-wide data in state
    * state is an object
    * state is mutable -- but do not mutate directly
    * use setState() to mutate state 
    * whenever state is mutated using setState() render method will be called
    * so that you can get the updated UI
    * setState will smartly merge the other existing state properties
    * Notable Problem of mutating state -- will result in re-rendering cycle
  */
  state = {
    tvChannelList: [
      {
        name: 'Star Sports 1',
        info: '#1 Sports Channel in India',
        logoURL: 'https://via.placeholder.com/225x150?text=StarSports 1'
      },
      {
        name: 'Nat Geo',
        info: 'Best Infotainment Channel in India',
        logoURL: 'https://via.placeholder.com/225x150?text=NatGeo'
      },
      {
        name: 'BBC Earth',
        info: 'Top Infotainment Channel in India',
        logoURL: 'https://via.placeholder.com/225x150?text=BBC Earth'
      }
    ],
    channelResolution: 'HD'
  }

  handleAddToFav = () => { // arrow function can get you 'this' keyword
    console.log('Clicked');
    console.log(this);
    // DO NOT mutate state directly. instead use setState
    // this.state.channelResolution = '4K'; // not recommended

    // setState() will update the UI. will invoke render method whenever state is mutated using setState()
    // setState will smartly merge the other state properties
    this.setState({
      tvChannelList: [
        {
          name: 'Star Sports 1 [ADDED TO FAVORITE]',
          info: '#1 Sports Channel in India',
          logoURL: 'https://via.placeholder.com/225x150?text=StarSports 1'
        },
        {
          name: 'Nat Geo',
          info: 'Best Infotainment Channel in India',
          logoURL: 'https://via.placeholder.com/225x150?text=NatGeo'
        },
        {
          name: 'BBC Earth',
          info: 'Top Infotainment Channel in India',
          logoURL: 'https://via.placeholder.com/225x150?text=BBC Earth'
        }
      ]
    });
  }

  // render method is mandatory for a class comp
  render() {
    // never ever change the state here 
    
    console.log('Inside Render');
    // returning JSX is mandatory
    return (
      <div>
        <p>Total No of Channels: {this.state.tvChannelList.length}</p>
        <p>Channel Resolution: {this.state.channelResolution}</p>

        <div className="row">

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.tvChannelList[0].logoURL} alt={this.state.tvChannelList[0].name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{this.state.tvChannelList[0].name}</h5>
                <p className="card-text">
                  {this.state.tvChannelList[0].info}
                </p>
                { /* Handling Events in React */  }
                <button className="btn btn-primary" onClick={this.handleAddToFav}>
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.tvChannelList[1].logoURL} alt={this.state.tvChannelList[1].name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{this.state.tvChannelList[1].name}</h5>
                <p className="card-text">
                  {this.state.tvChannelList[1].info}
                </p>
                <button className="btn btn-primary" >
                  Add to Fav
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <img src={this.state.tvChannelList[2].logoURL} alt={this.state.tvChannelList[2].name} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{this.state.tvChannelList[2].name}</h5>
                <p className="card-text">
                  {this.state.tvChannelList[2].info}
                </p>
                <button className="btn btn-primary" >
                  Add to Fav
                </button>
              </div>
            </div>
          </div>





        </div>

      </div>
    )
  }
}

export default ChannelList;
