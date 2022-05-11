import React from 'react';

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
    </div>
  )
}

export default Home;