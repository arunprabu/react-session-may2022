// hoc is higher order component 
/* 
  hoc - is going to receive props children and return props children 
  you can return multiple jsx children elements 
  wrapper comp that doesn't return any JSX on its own
  A pure function with zero side effects (no ajax call inside)

*/

const WithLastLogin = (props) => {
  console.log(props);
  return(
    <div>
     { props.children }
    </div>
  );
}

export default WithLastLogin;