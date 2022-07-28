import { useNavigate } from 'react-router-dom'

const Items = (props) => {
  let navigate = useNavigate()

  const showItems = (item) => {
    navigate(`${item._id}`)
  }

  return (
    <div className="item-grid">
      {props.items?.map((item) => (
        <div
          className="item-card"
          onClick={() => showItems(item)}
          key={item._id}
        >
          <img style={{ display: 'block' }} src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <h4>{item.description}</h4>
          <h4>{item.price}</h4>
        </div>
      ))}
    </div>
  )
}

export default Items
