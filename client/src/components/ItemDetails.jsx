import axios from 'axios'
import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

const BASE_URL = 'http://localhost:3001/api'

const ItemDetails = (props) => {
  const [item, setItem] = useState('')
  // let { id } = useParams()

  useEffect(() => {
    const getItemById = async (id) => {
      let data = await axios.get(`${BASE_URL}/items/${id}`)
      setItem(data.data.item)
      console.log(data.data.item)
    }
    getItemById()
  }, [])

  return item ? (
    <div className="detail">
      <div className="detail-header">
        <img src={item.image} alt={item.name} />
        <div
          style={{
            minWidth: '30em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>{item.name}</h1>
        </div>
      </div>
      <div className="info">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <h1>{item.description}</h1>
          <h3>{item.price}</h3>
        </div>
      </div>
    </div>
  ) : null
}

export default ItemDetails
