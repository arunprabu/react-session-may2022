import React, { Component } from 'react'

class MyProfile extends Component {

  state = {
    profileName: 'arun'
  }

  handleProfileNameChange = (event) => {
    console.log(event.target.value);
    this.setState({
      profileName: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h3>Account Info</h3>
        <p>Update Profile Name</p>
        {/* thw following input w/o onChange handler 
        will render a read-only field. -- Refer the console */}
        <input type="text" value={this.state.profileName} 
        onChange={this.handleProfileNameChange}/>
        <p>Profile Name: {this.state.profileName}</p>
      </div>
    )
  }
}

export default MyProfile;