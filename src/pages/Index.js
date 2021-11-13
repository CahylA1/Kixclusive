// import Show from "./Show";
import { useState} from 'react'
import { Link } from 'react-router-dom'




const Index = (props) => {

  const [newForm, setNewForm] = useState({
    name: "",
  image: "",
  title: "",
  release: "",
  retail: ""
  });

  // handleChange funtion for form 
  const handleChange = (event) => {
    setNewForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  };

  // handle submit function for form
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createSneaker(newForm);
    setNewForm({
      name: "",
      image:"",
      title: "",
      release: "",
      retail: ""
    })
  }
  
  //loading/loaded helper functions 

  const loaded = () => {
    return props.sneaker.map(shoe => (
      <div key={shoe._id} className="shoe">
        <Link to={`/kixclusive/${shoe._id}`}>
          <img style={{height: 100, borderRadius: '20%'}} src={shoe.image} alt={shoe.name}/>
        </Link>
      </div>
    ))
  }

  const loading = () => <h1> loading ... </h1>



  return (
    <section>
      <form onSubmit={handleSubmit}>
          <input
            value={newForm.name} 
            onChange={handleChange} 
            type="text"
            placeholder="Brand"
            name="name"
            />
          <input 
            value={newForm.image} 
            onChange={handleChange}
            type="url"
            placeholder="URL"
            name="image"
            />
          <input
            value={newForm.title} 
            onChange={handleChange} 
            type="text"
            placeholder="Kicks"
            name="title"
            />
          <input type="submit" value="Create Sneaker" />
      </form>
      {props.sneaker ? loaded() : loading() }
    </section>
  );

}

export default Index