import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const EditItem = (props) => {
  let { id, index } = useParams()

  let navigate = useNavigate()

  const initialState = {
    name: '',
    price: '',
    description: '',
    image: ''
  }

  const [itemValues, setItemValues] = useState(initialState)

  const handleChange = (e) => {
    setItemValues({ ...itemValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('edit')
    let res = await axios.put(
      `http://localhost:3001/api/items/${id}`,
      itemValues
    )
    setItemValues(initialState)
    navigate('/items')
    console.log('god help us')
  }

  return (
    <div>
      {/* <h1>Update the item below. {props.items[index].name} </h1> */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          // placeholder="Item Name"
          value={itemValues.name}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          id="price"
          // placeholder="Item Price"
          value={itemValues.price}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          id="description"
          // placeholder="Item Description"
          value={itemValues.description}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <input
          type="text"
          id="image"
          // placeholder="Item Image"
          value={itemValues.image}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditItem
