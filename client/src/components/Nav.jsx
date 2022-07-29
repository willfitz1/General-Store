import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>Store</h4>
      <div>
        <Link to="/">Home</Link>
        <Link to="/items">Store</Link>
        <Link to="/newitem">Add An Item</Link>
        <Link to="/review">Leave A Review</Link>
      </div>
    </nav>
  )
}

export default Nav
