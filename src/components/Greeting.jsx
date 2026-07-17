// original
// function Greeting({name}){
//   return <p>Hi, {name}</p>
// }

// export default Greeting;

// refactored
export default function Greeting({ name }) {
  return <p>Hi, {name}!</p>;
}
