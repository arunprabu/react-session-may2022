import React from 'react'; // rafce

const Program = (props) => {

  /* 
    * props are objects 
    * props are read-only
    * using props you can receive data passed from parent comp
    * recommended way to receive props is in the name of 'props'
    * props can have children
  */
  console.log(props);

  return (
    <div className="card mb-3">
      <div className="card-header">
        Featured Program
        <span className="badge bg-warning text-dark float-end">{props.category}</span>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">
          {props.children}
        </p>
        <a href="#" className="btn btn-primary">
          Watch Now
        </a>
      </div>
      <div className="card-footer text-muted">{props.releasedOn}</div>
    </div>
  )
}

export default Program;