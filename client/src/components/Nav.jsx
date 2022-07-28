import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <h4>Store</h4>
      <div>
        <Link to="/">Home</Link>
      </div>
    </nav>
  )
}

export default Nav
