// this is HOC 
// to share common functionality b/w components 


const applyStyles = ( OriginalComponent ) => {
  return( (props) => {
    console.log(props);
    return(
      // the hocStyle css class will be applied on both Hello and Bye components
      <div className="hocStyle">
        <OriginalComponent {...props}/>
      </div>
    )
  })
}

export default applyStyles;