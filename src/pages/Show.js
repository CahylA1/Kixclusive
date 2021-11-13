
const Shoe = (props) => {
  console.log("SHOWPROPS", props)
  const id = props.match.params.id;
  const sneaker = props.sneaker;
  const shoe = sneaker.find((s) => s._id === id);

  // make a fetch request to delete 1 sneaker 
  // create a function called ' deleteSneaker' 


const removeShoe = async (shoeId) => {
  // fetch returns a promise result 
  await fetch (`http://localhost:3001/kixclusive/${shoeId}`, {
    method : 'DELETE'
  })


  // props.deleteSneaker(shoe._id)
  // props.history.push("/");
}

return (
  <div className="Kix">
    <img src={shoe.image} alt={shoe.name}/>
    <h1>{shoe.name}</h1>
    <h1>{shoe.title}</h1>
    <h1>{shoe.retail}</h1>
    <h1>{shoe.release}</h1>
    <button id="delete" onClick={function() {removeShoe(id)}}>
      REMOVE
    </button>
  </div>
)
}

export default Shoe;