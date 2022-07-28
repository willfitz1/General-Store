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
    axios.post('httpl://localhost:3001/api/items', itemValues)
    navigate('/items')
  }

  // const newReview = props.newReview

  return (
    <div>
      <h1>Please leave us a review and let us know if you'd come back!</h1>
      <h4>Please fill the boxes below.</h4>
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
          placeholder="Please Put A Link To An Image Here"
          value={itemValues.image}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default NewItem
