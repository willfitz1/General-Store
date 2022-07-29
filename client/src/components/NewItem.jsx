import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const NewItem = (props) => {
  let navigate = useNavigate()

  const [itemValues, setItemValues] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  })

  const handleChange = (e) => {
    setItemValues({ ...itemValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    axios.post('http://localhost:3001/api/items', itemValues)
    navigate('/items')
  }

  return (
    <div>
      <h1>Anyone Can Sell An Item Here! </h1>
      <h4>Please fill the boxes below with the information for your item.</h4>
      <h5>Please be sure to include a link for your image.</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={itemValues.name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="price"
          placeholder="Item Price"
          value={itemValues.price}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="description"
          placeholder="Item Description"
          value={itemValues.description}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          name="image"
          placeholder="Item Image"
          value={itemValues.image}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewItem
