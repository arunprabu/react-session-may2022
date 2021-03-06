import React from 'react';
import ChannelList from '../../containers/ChannelList';
import TrendingShows from '../../containers/TrendingShows';
import Subscription from './Subscription';
import Program from './Program/Program';
import MyProfile from '../../containers/MyProfile';
import LifeCycleDemo from '../../containers/LifeCycleDemo';
import WithLastLogin from '../../hoc/WithLastLogin';

const Home = () => {

  return (
    <div className='container'>
      <div className="px-4 py-5 my-5 text-center">
        <img
          className="d-block mx-auto mb-4"
          src="https://developer.asustor.com/uploadIcons/0020_999_1600669622_Disney_Hotstar_256.png"
          alt="Hotstar logo"
          width={256}
          height={256}
        />
        <h1 className="display-5 fw-bold">Welcome to Hotstar App!</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Watch Movies,TV shows on Smartphone, TV and Laptop.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              Subscribe
            </button>
            <button type="button" className="btn btn-outline-secondary btn-lg px-4">
              Renew
            </button>
          </div>
        </div>
      </div>
      
      <div>
        <h2>Featured Programs | Props Demo</h2>
        <Program 
          name="Man Vs Wild" 
          category="Infotainment" 
          releasedOn="Released Today">   
          A Wild Adventure show by Bear Grylls
        </Program>

        <Program 
          name="Planet Earth II" 
          category="Infotainment" 
          releasedOn="Released last week">   
          A BBC Earth show by David Attenborough
        </Program>

        <Program 
          name="IPL 2022" 
          category="Sports" 
          releasedOn="Live at 7.30PM">   
          IPL 2022 Cricket
        </Program>

        <hr />
        <h2>Channel List | States, Events Demo</h2>
        <ChannelList />

        <hr/>
        <h2>Trending Shows | States, Updating State Immutably, Events, Lists, Keys, Conditional Rendering</h2>
        <TrendingShows />
        
        <hr/>
        <h2>Subscription | Styling Demo</h2>
        <Subscription />
        
        <hr />
        <h2>My Profile | Two Way Binding</h2>
        <MyProfile />

        <hr />
        <h2>LifeCycle Hooks Demo</h2>
        <LifeCycleDemo />

        <hr />
        <h2>Higher Order Components (HOC) - Demo</h2>
        <WithLastLogin>
          <p>Last Login: 16/May/2022</p>
          <p>Updated on: 6PM yesterday</p>
        </WithLastLogin>

        <WithLastLogin>
          <p>Do you want to signout?</p>
        </WithLastLogin>


      </div>
    </div>
  )
}

export default Home;