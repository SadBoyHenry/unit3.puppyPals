import { useState } from 'react'
import {puppyList} from './data.js'
import './path-to-css.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log("puppyList: ", puppyList);

  return (
    <>
      <div className='App'>
        {
          puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>;
          })
        }
      </div>
    </>
  );
}

function App() {

  const [puppies, setPuppies] = useState(puppyList);

  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p key={puppy.id}>{puppy.name}</p>;
           })
       }
    </div>
  );
}
export default App
