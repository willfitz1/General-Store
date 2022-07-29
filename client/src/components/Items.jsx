import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const Items = (props) => {
  let navigate = useNavigate()

  const showItems = (item) => {
    navigate(`${item._id}`)
  }

  const getItem = async (id) => {
    console.log('banaana')
    let res = await axios.get(`http://localhost:3001/api/items/${id}`)
    props.getItems()
  }
  useEffect(() => {
    getItem()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/api/items/${id}`)
    props.getItems()
    console.log('banaana')
    window.location.reload(false)
  }

  return (
    <div className="item-grid">
      {props.items?.map((item) => (
        <div className="item-card" key={item._id}>
          <img style={{ display: 'block' }} src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <h4>{item.description}</h4>
          <h4>{item.price}</h4>
          <button onClick={() => handleDelete(item._id)}>Delete Item</button>
        </div>
      ))}
    </div>
  )
}

export default Items
