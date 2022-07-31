import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

// const BASE_URL = 'http://localhost:3001/api'

const ItemDetails = (props) => {
  const [item, setItem] = useState('')

  let { id, index } = useParams()

  useEffect(() => {
    const getItemById = async (id) => {
      let data = await axios.get(`http://localhost:3001/api/items/${id}`)
      setItem(data.data.item)
      console.log(data.data.item)
    }
    getItemById()
  }, [])

  console.log(props.items[index])

  return (
    <div className="detail">
      <div className="detail-header">
        <img src={props.items[index].image} alt={props.items[index].name} />
        <div
          style={{
            minWidth: '30em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>{props.items[index].name}</h1>
        </div>
      </div>
      <div className="info">
        <div>
          <h1>{props.items[index].description}</h1>
          <h3>{props.items[index].price}</h3>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails
