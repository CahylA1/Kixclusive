import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Index from '../pages/Index'
import Show from '../pages/Show'


function Main(props) {
  console.log("MAIN PROPS", props)
  const [sneaker, setSneaker ] = useState(null);

  const BASE_URL = 'http://localhost:3001/kixclusive/';


  //  helper functions for getting and creating sneeakers
  const getSneaker = async () => {
    const response = await fetch(BASE_URL)
    const data = await response.json();
    setSneaker(data);
  }

  const createSneaker = async (shoe) => {
    await fetch(BASE_URL,{
      method: 'POST',
      headers: {
        'Content-type': 'Application/json'
      },
      body: JSON.stringify(shoe)
    })

    getSneaker() // get Sneaker and update state after creating a sneaker
  }



// get sneakers when application loads 
useEffect(() => getSneaker(), []) // runs once on page load 

// BE SURE TO Proof read *

  return ( 
    <main>
      <Switch>
        <Route exact path="/">
          <Index sneaker={sneaker} createSneaker={createSneaker}/>
        </Route>
        <Route path="/kixclusive/:id" render={(rp) => (
          <Show {...rp} sneaker={sneaker} />
        )} />
      </Switch>
    </main>
  )
}

export default Main;