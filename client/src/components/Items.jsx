import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  let navigate = useNavigate()

  const showItems = (item) => {
    navigate(`${item._id}`)
  }

  // const getItem = async (id) => {
  //   console.log('banaana')
  //   let res = await axios.get(`http://localhost:3001/api/items/${id}`)
  //   // props.setItems()
  //   console.log('fruitloops')
  // }
  // useEffect(() => {
  //   getItem()
  // }, [])

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/items/${id}`)
    console.log('banaana')
    props.getItems()
  }

  return (
    <div className="item-grid">
      {props.items?.map((item, index) => (
        <div className="item-card" key={item._id}>
          <img style={{ display: 'block' }} src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <h5>{item.description}</h5>
          <h5>{item.price}</h5>
          <Link to={`/items/${item._id}/${index}`}>View Item</Link>
          <button onClick={() => handleDelete(item._id)}>Delete Item</button>
        </div>
      ))}
    </div>
  )
}

export default Items
